// src/configure_continuous_integration_0.ts
import { writeFileSync } from 'fs';
import { join } from 'path';

const workflowContent = `name: CI
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
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
    - name: Run tests
      run: npm test
    - name: Run linting
      run: npm run lint
`;

export function configureContinuousIntegration(): void {
  const workflowPath = join('.github', 'workflows', 'ci.yml');
  writeFileSync(workflowPath, workflowContent);
  console.log('Continuous integration workflow configured successfully');
}

configureContinuousIntegration();
