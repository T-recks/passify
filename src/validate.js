/*
| Functions for validating arguments passed in through the command line
*/

const colors = require('colors/safe');

function isPositive (arg) {
    return (typeof arg === 'number' && arg > 0);
};

function isInteger (arg) {
    return (typeof arg === 'number' && arg % 1 === 0);
};

function isWholeNumber (arg) {
    return (isPositive(arg) && isInteger(arg));
};

function customError (arg) {
    if (arg === 'invalidNumber') {
        console.error(colors.red('(numbers must be integers greater than or equal to 1)\n'));
    }

    console.error(colors.dim('Specify --help (-h) for available options'));
    process.exit();
};

var validateNumbers = function (arr) {
    var rejects = [];
    for (var i = 0; i < arr.length; i++) {
        if (!isWholeNumber(arr[i])) {
            rejects.push(arr[i]);
        };
    }

    if (rejects.length === 1) {
        console.error(colors.red(`Invalid input: ${rejects[0]}`));
        customError('invalidNumber');
    } else if (rejects.length > 1) {
        console.error(colors.red(`Invalid inputs: ${rejects.join(', ')}`));
        customError('invalidNumber');
    }
}

module.exports = {validateNumbers};
