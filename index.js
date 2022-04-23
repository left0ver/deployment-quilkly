#!/usr/bin/env node
const { program } = require('commander')
const packageJSon = require('./package.json')
const createBuildCommand = require('./command/createBuildCommand')
const version = packageJSon.version
program.version(version)
createBuildCommand()
program.parse(process.argv)
