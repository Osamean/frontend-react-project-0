import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

packageJson.scripts = {
  ...packageJson.scripts,
  'lint-staged': 'lint-staged',
  prepare: 'husky install'
};

packageJson.devDependencies = {
  ...packageJson.devDependencies,
  husky: '^8.0.3',
  'lint-staged': '^13.2.2'
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

execSync('npm install', { stdio: 'inherit' });

const lintStagedConfig = {
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss}': ['prettier --write']
};

const lintStagedPath = path.join(process.cwd(), '.lintstagedrc');
fs.writeFileSync(lintStagedPath, JSON.stringify(lintStagedConfig, null, 2));

console.log('Commit hooks setup complete!');
