import { join as joinPath, relative } from 'path';
import { readdir, writeFile, existsSync, mkdirSync } from 'fs';
import { promisify } from 'util';

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);

const lokiDir = joinPath(__dirname, '..', '.loki');

// Paths to loki folders
const currentShotsDir = joinPath(lokiDir, 'current');
const referenceShotsDir = joinPath(lokiDir, 'reference');
const differenceShotsDir = joinPath(lokiDir, 'difference');

// Path to reports folder and path to report.json
const reportJsonPath = joinPath(lokiDir, 'report', 'report.json');
const reportFolderPath = joinPath(lokiDir, 'report');

// Relative paths from folder where loki folders located and folder where report.json located
const currentShotsRelativePath = relative(reportFolderPath, currentShotsDir);
const referenceShotsRelativePath = relative(reportFolderPath, referenceShotsDir);
const differenceShotsRelativePath = relative(reportFolderPath, differenceShotsDir);

(async function main() {
  const diffs = await asyncReaddir(differenceShotsDir);

  if (!existsSync(reportFolderPath)) {
    mkdirSync(reportFolderPath, { recursive: true });
  }

  await writeFileAsync(
    reportJsonPath,
    JSON.stringify({
      newItems: [],
      deletedItems: [],
      passedItems: [],
      failedItems: diffs,
      expectedItems: diffs,
      actualItems: diffs,
      diffItems: diffs,
      actualDir: currentShotsRelativePath,
      expectedDir: referenceShotsRelativePath,
      diffDir: differenceShotsRelativePath,
    }),
  );
})();
