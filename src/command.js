#!/usr/bin/env node

// Importing the Command class from the 'commander' package, 
// and creating a new instance of the Command class
import { Command } from 'commander';
const program = new Command()
// Importing local functions & important JS packages
import parseitem from './parseitem.js';
import parsegroup from './parsegroup.js';

// Setting up the command line interface,
// Defining the command 'parse' and its required argument '<html>'
program
  .command('item <ITEM>') // 
  .description('This is a console application that converts HTML to Atlassian Document Format (ADF).')
  .action((item) => {
    // Converting the HTML to ADF using the provided function
    const adfoutput = parseitem(item);
    console.log(adfoutput);
  })
  .summary('Convert HTML to ADF')
  .helpOption('-h, --help', 'Display help for command')
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ htmladf parse "<h1>Hello World</h1>"');
    console.log('  $ htmladf parse "<h1>Hello World</h1>" > output.json');
  });

// Defining the option '--group' and its required argument '<group>'
program
  .command('group <GROUP>')
  .description('Read HTML from a group of items and convert to ADF')
  .action((group) => {
    // Converting the HTML to ADF using the provided function
    const groupoutput = parsegroup(group);
    console.log(groupoutput);
  })
  .summary('Convert HTML to ADF')
  .helpOption('-h, --help', 'Display help for command')
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ htmladf group ./input.html');
  });

// Defining the command 'help'
program
  .helpOption('-h, --help', 'Display help for command')
  .on('--help', () => {
    console.log('');
    console.log('Examples:');
    console.log('  $ htmladf --help');
  });

// Parsing the command line arguments
program.parse(process.argv);
