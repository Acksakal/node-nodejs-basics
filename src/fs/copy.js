import { cp } from 'node:fs/promises';
import path from 'node:path';
import { printMsg, printErr } from '../utils.js';
import { FS_OPERATION_FAILED_ERROR } from '../utils.js';

const copy = async () => {
  printMsg({ msg: "Starting copy.js" });
  const sourceDir = path.resolve('src/fs/files');
  const destDir = path.resolve('src/fs/files_copy');

  try {
    await cp(sourceDir, destDir, {
      recursive: true,
      force: false,
      errorOnExist: true
    });
    printMsg({ msg: `Success: ${sourceDir} has been successfully copied to ${destDir}` });
  } catch (cause) {
    printErr({ msg: FS_OPERATION_FAILED_ERROR });
    console.error(cause);
  }

  printMsg({ msg: "Ending copy.js" });
};

await copy();
