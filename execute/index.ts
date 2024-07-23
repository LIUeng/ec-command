import * as process from 'node:process';
import { Command, InvalidArgumentError } from 'commander';

const program = new Command();

// ec name
program.name('ec').version('0.0.1', '-v, --version', 'output the current version');

// command: stash
program
  .command('stash')
  .argument('<name>', 'drop')
  .requiredOption('-n <number|string>', '1 | <1 | <=1 | >=1 | >1 | 1..2', function (value) {
    let match;
    if (!(match = value.match(/^(?:<|<=|>|>=)?(\d+(\.{2}\d+)?)$/))) {
      throw new InvalidArgumentError('');
    }
    return match[0];
  })
  .action(function (name, options) {
    const cmd = require(`./stash.${name}.js`);
    cmd.run(options);
  });

// parse argv
program.parse(process.argv);
