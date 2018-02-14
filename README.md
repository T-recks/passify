# Passmake

A command line application that generates cryptographically-strong, random strings of letters and numbers (and optionally symbols) using [generate-password](https://github.com/brendanashworth/generate-password).

# Install

The npm package has been deprecated since I don't have plans to update or maintain this. If you're interested in using the CLI just clone the repository and wire it up as you see fit. Using a shell alias for "node /path/to/src/app.js" would probably be the quickest way to enable easy use.

# Usage

To generate a random string using the default settings:

```bash
$ passmake
```

To automatically copy a generated string to the clipboard:

```bash
$ passmake --copy
```

For more details:

```bash
$ passmake --help
```
