#!/usr/bin/env node

// Importing the Command class from the 'commander' package, 
// and creating a new instance of the Command class
import { Command } from 'commander';
const program = new Command()
// Importing local functions & important JS packages
import parseitem from './parseitem.js';
import clc from 'cli-color';

const color = {
  normal: clc.xterm(202),
  error: clc.xterm(196),
  success: clc.xterm(118),
  warning: clc.xterm(226),
  info: clc.xterm(51),
  grey: clc.xterm(245),
  bold: clc.bold,
  italic: clc.italic,
  underline: clc.underline,
  reset: clc.reset
}

// Setting up the command line interface,
// Defining the command 'parse' and its required argument '<html>'
program
  .command('item <ITEM>') // 
  .description('Converts HTML to Atlassian Document Format (ADF).')
  .action((item) => {
    // Converting the HTML to ADF using the provided function
    const adfoutput = parseitem(item);
    console.log(adfoutput);
  })
  .summary('Converts HTML to Atlassian Document Format (ADF).')
  .helpOption('-h, --help', 'Display help for command')
  .on('--help', () => {
    console.log('');
    console.log(color.bold(color.success('Examples:')));
    console.log(color.italic(color.success("  $ ") + "html2adf item " + color.info(`"<h1>HTML text input</h1>"`)));
    console.log(color.italic(color.success("  $ ") + "html2adf item " + color.info(`"<h1>HTML text input</h1>"`) + ' > output.json'));
    console.log('');
    console.log(color.bold(color.success('Notes:')));
    console.log(color.info(' - Pass the string inside double quotations.'));
    console.log(color.info(' Correct: '))
    console.log(color.italic(color.success("  $ ") + "html2adf item " + color.info(`"<h1>HTML text input</h1>"`)));
    console.log(color.info(' - Internal quotations should be single only.'));
    console.log(color.info(' Correct: '))
    console.log(color.italic(color.success("  $ ") + "html2adf item " + color.info(`"<p><b>Google:</b><a target='_blank' href='https://www.google.com'>Google</a></p>'"`)));
  });

// Defining the command 'help'
program
  .helpOption('-h, --help', 'Display help for command')
  .on('--help', () => {
    console.log('');
    console.log(color.bold(color.success('Examples:')));
    console.log(color.italic(color.success("  $ ") + "html2adf help"));
    console.log(color.italic(color.success("  $ ") + "html2adf item" + color.grey(' --help')));
    console.log(color.italic(color.success("  $ ") + "html2adf item " + color.info(`"<h1>HTML text input</h1>"`)));
    console.log(color.italic(color.success("  $ ") + "html2adf item " + color.info(`"<h1>HTML text input</h1>"`) + ' > output.json'));
  });

// Defining the command 'version'
program
  .version('v0.1.1', '-v, --version', 'Output the current version')
  .on('--version', () => {
    console.log('');
    console.log(color.bold(color.success('Examples:')));
    console.log(color.italic(color.success("  $ ") + "html2adf version"));
  });

// Parsing the command line arguments
program.parse(process.argv);
