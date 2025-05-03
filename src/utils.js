const supportsColor = process.stdout.isTTY && process.env.TERM !== 'dumb';

const colors = {
  green: supportsColor ? '\x1b[32m' : '',
  violet: supportsColor ? '\x1b[35m' : '',
  red: supportsColor ? '\x1b[31m' : '',
  reset: supportsColor ? '\x1b[0m' : '',
};

const colorMap = {
  info: colors.green,
  important: colors.violet,
  error: colors.red,
};

/**
 * Prints a message to stdout with color formatting.
 * @param {Object} props
 * @param {string} props.msg - The message to log
 * @param {'info' | 'important' | 'error'} [props.type='info'] - Message type
*/
export function printMsg({ msg, type = 'info' }) {
  const message = `${colorMap[type]}${msg}${colors.reset}`;
  console.log(message);
}

/**
 * Prints a message to stderr with color formatting.
 * @param {Object} props
 * @param {string} props.msg - The message to log
*/
export function printErr({ msg }) {
  const message = `${colorMap['error']}${msg}${colors.reset}`;
  console.error(message);
}

/**
 * Throws a colored error while preserving the original cause.
 * @param {Object} props
 * @param {string} props.msg - The error message
 * @param {unknown} [props.cause] - The original error to preserve
*/
export function throwErr({ msg, cause }) {
  const message = `${colorMap.error}${msg}${colors.reset}`;
  throw new Error(message, { cause });
}


export const FS_OPERATION_FAILED_ERROR = "FS operation failed";