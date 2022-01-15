#!/usr/bin/env node

/*

1. 如何引用一个模块?

*/
const ArgsParser = require("yargs-parser");
const { program } = require('commander');
program.version('0.0.1');


program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);
const options = program.opts();

if (options.debug) console.log(options);



return;

const command = process.argv[2];
const args = ArgsParser(process.argv.slice(3));

if (!command) {
  console.log("帮助信息");
  return;
}

if (command == "--version") {
  console.log("cli-demo 0.0.2");
  return;
}

console.log(command);
console.log(args);

if (command == "pod") {
  console.log('pod checkout');
  process.exit(8);
}