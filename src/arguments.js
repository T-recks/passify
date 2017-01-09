/*
| Yargs configuration
*/

const colors = require('colors/safe');

var argv = require('yargs')
    .options({
        length: {
            alias: 'l',
            describe: 'specify number of characters per string',
        },
        number: {
            alias: 'n',
            describe: 'specify number of strings to be generated',
        },
        symbols: {
            alias: 's',
            describe: 'include symbols in generated string',
            boolean: true
        },
        copy: {
            alias: 'c',
            describe: 'copy generated string to clipboard \n if generating multiple strings, only the first will be copied',
            boolean: true
        }
    })
    .fail(function (msg, err, yargs) {
        if (err) throw err
        console.error(`${colors.red(msg)}\n`);
        console.error(colors.dim('Specify --help (-h) for available options'));
        process.exit(1);
    })
    .help()
    .alias('help', 'h')
    .strict()
    .argv;

module.exports = {argv};
