import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

packageJson.scripts = {
  ...packageJson.scripts,
  'lint-staged': 'lint-staged',
  'commitlint': 'commitlint --edit',
  'prepare': 'husky install'
};

packageJson['lint-staged'] = {
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write']
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

execSync('npm install husky lint-staged @commitlint/cli @commitlint/config-conventional --save-dev', { stdio: 'inherit' });
execSync('husky install', { stdio: 'inherit' });
execSync('husky add .husky/pre-commit "npx lint-staged"', { stdio: 'inherit' });
execSync('husky add .husky/commit-msg "npx commitlint --edit"', { stdio: 'inherit' });
