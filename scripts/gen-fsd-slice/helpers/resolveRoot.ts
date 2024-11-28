import path from 'path';

function resolveRoot(...segments: Array<string>) {
  return path.resolve(__dirname, '..', '..', '..', ...segments);
}

export default resolveRoot;
