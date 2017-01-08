#!/usr/bin/env node

const generator = require('generate-password');
const yargs = require('yargs');
const ncp = require('copy-paste');
const colors = require('colors/safe');

let defaultLength = 20;

const argv = yargs
    .options({
        length: {
            alias: 'l',
            describe: 'specify number of characters per string',
            number: true
        },
        number: {
            alias: 'n',
            describe: 'specify number of strings to be generated',
            number: true
        },
        copy: {
            alias: 'c',
            describe: 'copy generated string to clipboard \n if generating multiple strings, only the first will be copied',
            boolean: true
        },
        symbols: {
            alias: 's',
            describe: 'include symbols in generated string',
            boolean: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let stringLength = argv.length || defaultLength;
let stringNumber = argv.number || 1;

let message = `Generated ${colors.bold.underline(stringNumber)} string(s) with ${colors.bold.underline(stringLength)} characters`;

if (argv.symbols) {
    message += ' and symbols';
}

message += '...';

console.log(colors.yellow(message));

var strings = generator.generateMultiple(stringNumber, {
    length: stringLength,
    numbers: true,
    symbols: argv.symbols
});

var copyMessage = '';

if (argv.copy) {
    copyMessage = '(copied to clipboard)';
    ncp.copy(strings[0]);
}

console.log(colors.green(strings[0]), colors.dim(copyMessage));

for (var i = 1; i < stringNumber; i++) {
    console.log(colors.green(strings[i]));
}
