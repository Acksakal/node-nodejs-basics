import { fork } from 'node:child_process';
import path from 'node:path';
import { printMsg } from '../utils.js';

const spawnChildProcess = async (args) => {
  const scriptPath = path.resolve('src/cp/files/script.js');

  printMsg({ msg: "Starting cp.js" });
  fork(scriptPath, args)
};

spawnChildProcess(['test1', 'test2']);




/*
[SELF-REVIEW] Below is another more explicit approach

import { spawn } from 'node:child_process';
import path from 'node:path';

const spawnChildProcess = async (args) => {
  const scriptPath = path.resolve(`${import.meta.dirname}/files/script.js`);

   const child = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit']
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(['test1', 'test2']);

*/
