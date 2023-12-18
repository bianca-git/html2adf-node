# html2adf

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

This is a console application that converts HTML to Atlassian Document Format (ADF) using the Atlassian Atlaskit modules.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Please note that you need to have Node.js and npm installed on your machine to run this program. If you don't have them installed, you can download them from the [official Node.js website](https://nodejs.org/).

### Installing

To install this program, you would typically follow these steps:

1. **Clone the repository**: If this code is part of a repository, you would first clone it to your local machine using Git. If it's not part of a repository, you would need to create a new directory on your machine and add this file to it.


```powershell
mkdir html2adf
git clone https://github.com/bianca-git/html2adf-node ./html2adf
cd html2adf
```

2. **Install dependencies**: If there's a `package.json` file in the directory, you would install the dependencies using npm (Node Package Manager). The `commander` package is a dependency of this program.

```powershell
npm install
```

3. **Install the CLI program globally**: This will make it callable from any location on your system.

```powershell
npm -g install
```

## Usage <a name = "usage"></a>


```powershell
html2adf item "<h1>This is where you put your HTML Input</h1>"
```

```powershell
html2adf help
Usage: command [options] [command]

Options:
  -h, --help      Display help for command

Commands:
  item <ITEM>     Converts HTML to Atlassian Document Format (ADF).
  help [command]  display help for command

Examples:
  $ html2adf help
  $ html2adf item --help
  $ html2adf item "<h1>HTML text input</h1>"
  $ html2adf item "<h1>HTML text input</h1>" > output.json
```
### HTML Formatting Requirements

As this is a terminal program, the HTML input will need to be formatted specifically. Most issues have been picked up in the function, but please note the following requirements:

1. Pass the string inside double quotations:

*Correct handling:* 
```powershell
$ html2adf item "<h1>HTML text input</h1>"
```

2. Internal quotations should be single only:

*Correct handling:* 
```powershell
$ html2adf item "<p><b>Google:</b><a target='_blank' href='https://www.google.com'>Google</a></p>"
```