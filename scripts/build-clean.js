/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const exec = require('exec-sh');
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const getOutput = require('./get-output.js');

async function buildClean(project, cb) {
  if (process.env.NODE_ENV === 'development' && project !== 'core') {
    cb();
    return;
  }
  const output = `${getOutput()}/${project}`;

  // Use glob to find and delete files instead of xargs
  const patterns = [
    '**/*.js',
    '*.js',
    '**/*.ts',
    '*.ts',
    '**/*.svelte',
    '*.svelte',
    '**/*.css',
    '*.css',
    '**/*.less',
    '*.less',
    '**/*.map',
    '*.map',
  ];

  const dirs = ['cjs', 'esm', 'components', 'less', 'modules', 'types'];

  try {
    // Delete files matching patterns, excluding postinstall.js
    for (const pattern of patterns) {
      const files = glob.sync(pattern, { cwd: output, nodir: true });
      for (const file of files) {
        if (!file.includes('postinstall.js')) {
          try {
            fs.unlinkSync(path.join(output, file));
          } catch (e) {
            // Ignore errors for individual files
          }
        }
      }
    }

    // Delete directories
    for (const dir of dirs) {
      const dirPath = path.join(output, dir);
      if (fs.existsSync(dirPath)) {
        await exec.promise(`rm -rf "${dirPath}"`, true);
      }
    }
  } catch (e) {
    console.error('Error during cleanup:', e.message);
  }

  if (cb) cb();
}

module.exports = buildClean;
