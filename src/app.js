#!/usr/bin/env node

const generator = require('generate-password');
const ncp = require('copy-paste');
const colors = require('colors/safe');
const {settings} = require('./settings');
const argv = require('./arguments').argv;
const validate = require('./validate');

var stringLength = argv.length || settings.defaults.length;
var stringNumber = argv.number || settings.defaults.number;
var copyString = argv.copy || settings.defaults.copy;

validate.validateNumbers([stringLength, stringNumber]);

var message = `Generated ${colors.bold.underline(stringNumber)} string(s) with ${colors.bold.underline(stringLength)} characters`;

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

if (copyString) {
    var copyMessage = '(copied to clipboard)';
    ncp.copy(strings[0]);
} else {
    var copyMessage = '';
}

console.log(colors.green(strings[0]), colors.dim(copyMessage));

for (var i = 1; i < stringNumber; i++) {
    console.log(colors.green(strings[i]));
}
