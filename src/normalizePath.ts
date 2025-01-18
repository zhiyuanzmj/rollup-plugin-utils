import { posix } from 'pathe';

import type { NormalizePath } from '../types';

const normalizePathRegExp = new RegExp(`\\\\`, 'g');

const normalizePath: NormalizePath = function normalizePath(filename: string) {
  return filename.replace(normalizePathRegExp, posix.sep);
};

export { normalizePath as default };
