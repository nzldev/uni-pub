#! /usr/bin/env node

const { Cli } = require('./../dist/cli/cli');

process.title = 'uniPub-server';

Cli.startWithPm2();
