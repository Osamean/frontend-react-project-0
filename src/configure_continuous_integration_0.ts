// src/configure_continuous_integration_0.ts
import fs from 'fs';
import path from 'path';

const workflowContent = `name: CI
on: [push]
jobs:
  test-and-lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Run linting
        run: npm run lint
      - name: Run tests
        run: npm run test
`;

export function configureContinuousIntegration(): void {
  const workflowPath = path.join('.github', 'workflows', 'ci.yml');
  fs.mkdirSync(path.dirname(workflowPath), { recursive: true });
  fs.writeFileSync(workflowPath, workflowContent);
  console.log('Continuous integration workflow configured successfully');
}

configureContinuousIntegration();
