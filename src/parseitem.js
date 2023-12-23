import { Window } from 'happy-dom';
import { defaultSchema } from '@atlaskit/adf-schema/dist/cjs/schema/default-schema.js';
import { JSONTransformer } from '@atlaskit/editor-json-transformer';
import { JIRATransformer } from '@atlaskit/editor-jira-transformer';
import { escape, unescape } from 'html-escaper';

// Initialize the transformers
const jiraTransformer = new JIRATransformer(defaultSchema);
const adfTransformer = new JSONTransformer();
const regexRemove = `/[^\x00-\xff]|\n+|
+|\r+|\t+|\0+|  +|(<br ?.{1}>)+|(<br>)+/gmiv`
const escapeRegex = (html) => {
  if (html == null) return '';
  return String(html).replaceAll(/[$-\/?[-^{|}]/g, '\$&').replaceAll(regexRemove, '');
};

/**
 * Converts HTML to ADF and logs the result.
 * @param {string} html - The HTML string to be converted.
 */
function parseitem(html) {
  const escaped = escape(escapeRegex(html))
  const unescaped = unescape(escaped)
  try {
    // Simulate browser environment
    const dom = new Window();
    global.window = dom;
    global.DOMParser = window.DOMParser;
    global.Node = dom.Node;
    global.HTMLElement = dom.HTMLElement;

    // Convert HTML to ADF
    const pmNode = jiraTransformer.parse(unescaped);
    // Convert ADF to JSON
    const adfJson = adfTransformer.encode(pmNode);
    // Log the result
    return JSON.stringify(adfJson)
  }
  catch (error) {
    return { err: error, inputHTML: unescaped }
  }
}

export default parseitem