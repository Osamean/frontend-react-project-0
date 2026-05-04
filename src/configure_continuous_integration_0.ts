import fs from 'fs';
import path from 'path';

export function configureContinuousIntegration(): void {
  const workflowDir = path.join('.github', 'workflows');
  const workflowFile = path.join(workflowDir, 'ci.yml');
  
  if (!fs.existsSync(workflowDir)) {
    fs.mkdirSync(workflowDir, { recursive: true });
  }
  
  const workflowContent = `name: Continuous Integration
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
  
  fs.writeFileSync(workflowFile, workflowContent);
}
