import * as childProcess from 'node:child_process';

// git stash drop command
function dropStashes(min: number, max: number): void {
  for (let n = max; n > min; n--) {
    const command = `git stash drop stash@{${n}}`;
    try {
      childProcess.execSync(command, { cwd: process.cwd() });
      console.log(`Drop stash@{${n}} successfully.\n`);
    } catch (e) {
      // ignore check
      // console.error(`\nCheck the '${command}' right.`);
    }
  }
}

// main func: run
export function run(argv: ec.stash.dropArgs) {
  let total = 0;

  // get git install or init
  try {
    const stdout = childProcess.execSync('git stash list', { cwd: process.cwd(), encoding: 'utf-8' });
    total = stdout ? stdout.split('\n').length - 1 : 0;
  } catch (e) {
    throw new Error('Git command error, has git install or repositry init sure?');
  }

  let prop = String(argv.n);
  let min: number;
  let max: number;

  console.log('Start execute git stash drop command.\n');

  let match = prop.match(/^(?:<|<=|>|>=)?(?:(\d+)(?:\.{2}(\d+))?)$/);
  if (!match) {
    console.warn('No stashes drop.');
    return;
  }

  let matchNumber = parseInt(match[1], 10);

  if (~prop.indexOf('..')) {
    min = matchNumber - 1;
    max = parseInt(match[2], 10);
  } else if (~prop.indexOf('<')) {
    min = -1;
    max = ~prop.indexOf('<=') ? matchNumber : matchNumber - 1;
  } else if (~prop.indexOf('>')) {
    min = ~prop.indexOf('>=') ? matchNumber - 1 : matchNumber;
    max = total - 1;
  } else {
    min = matchNumber - 1;
    max = matchNumber;
  }

  if (min >= max || max - min > total) {
    console.warn('No stashes drop.');
    return;
  }

  dropStashes(min, max);
  console.log('Execute git stash drop command end.\n');
}
