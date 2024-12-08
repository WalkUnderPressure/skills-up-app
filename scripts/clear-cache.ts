import { rimrafSync } from 'rimraf';
import path from 'path';

const CACHE_DIR_PATH = path.resolve(__dirname, '..', 'node_modules', '.cache');
rimrafSync(CACHE_DIR_PATH);
