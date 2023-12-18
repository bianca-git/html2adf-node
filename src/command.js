#!/usr/bin/env node

// Importing the Command class from the 'commander' package, 
// and creating a new instance of the Command class
import { Command } from 'commander';
const program = new Command()
// Importing local functions & important JS packages
import parseitem from './parseitem.js';

// Setting up the command line interface,
// Defining the command 'parse' and its required argument '<html>'
program
  .command('item <ITEM>') // 
  .description('Converts HTML to Atlassian Document Format (ADF).')
  .action((item) => {
    item.split(`'+'`).join('')
    // Converting the HTML to ADF using the provided function
    const adfoutput = parseitem(item);
    console.log(adfoutput);
  })
  .summary('Converts HTML to Atlassian Document Format (ADF).')
  .helpOption('-h, --help', 'Display help for command')
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ html2adf item "<h1>Hello World</h1>"');
    console.log('  $ html2adf item "<h1>Hello World</h1>" > output.json');
  });

// Defining the command 'help'
program
  .helpOption('-h, --help', 'Display help for command')
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ html2adf --help');
  });

// Parsing the command line arguments
program.parse(process.argv);
