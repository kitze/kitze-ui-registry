#!/usr/bin/env bash

# This script tests the pre-commit hook by making temporary changes to registry.json
# and attempting to commit them.

set -e

# Create a temporary copy of registry.json
cp registry.json registry.json.backup

echo "=== Testing with a valid component ==="
# Make a temporary change to registry.json (a valid one)
node -e "const fs = require('fs'); const reg = JSON.parse(fs.readFileSync('registry.json')); reg.items.push({name: 'test-component', type: 'registry:component', title: 'Test Component', description: 'A test component', files: []}); fs.writeFileSync('registry.json', JSON.stringify(reg, null, 2));"

echo "Made temporary change to registry.json (added a valid test-component)"
echo "Attempting to commit..."

# Try to commit the change
git add registry.json
git commit -m "Test commit with valid component (should pass hook)" || echo "Commit failed"

# Restore the original registry.json
mv registry.json.backup registry.json
git restore --staged registry.json

echo -e "\n=== Testing with an invalid component (missing required fields) ==="
# Make a copy again
cp registry.json registry.json.backup

# Make an invalid change (missing required 'type' field)
node -e "const fs = require('fs'); const reg = JSON.parse(fs.readFileSync('registry.json')); reg.items.push({name: 'invalid-component', title: 'Invalid Component', description: 'Missing required type field', files: []}); fs.writeFileSync('registry.json', JSON.stringify(reg, null, 2));"

echo "Made temporary change to registry.json (added an invalid test-component)"
echo "Attempting to commit (this should fail)..."

# Try to commit the change
git add registry.json
git commit -m "Test commit with invalid component (should fail hook)" || echo "Commit failed as expected because the component was invalid"

# Restore the original registry.json
mv registry.json.backup registry.json
git restore --staged registry.json

echo -e "\n✅ Done testing pre-commit hook"
echo "Your pre-commit hook is configured to validate registry files before committing." 