#!/usr/bin/env bash

# This script tests that our registry validator correctly identifies valid and invalid components
# Note: This doesn't test the actual pre-commit hook, just the validation script

set -e

echo "🔍 Testing registry validation..."
echo "This test will:"
echo "  1. Test a valid component (should pass validation)"
echo "  2. Test an invalid component (should fail validation)"
echo "========================================================================"

# Create a temporary copy of registry.json
cp registry.json registry.json.backup

echo -e "\n✅ === TEST 1: Validating a valid component ==="
# Make a temporary change to registry.json (a valid one)
node -e "const fs = require('fs'); const reg = JSON.parse(fs.readFileSync('registry.json')); reg.items.push({name: 'test-component', type: 'registry:component', title: 'Test Component', description: 'A test component', files: []}); fs.writeFileSync('registry.json', JSON.stringify(reg, null, 2));"

echo "📝 Made temporary change to registry.json (added a valid test-component)"
echo "🔄 Running validation... (this should pass)"

# Run the validation directly
npx tsx scripts/lint-registry.ts && echo "✅ Validation passed as expected!" || echo "❌ ERROR: Validation failed on a valid component"

# Restore the original registry.json
mv registry.json.backup registry.json

echo -e "\n❌ === TEST 2: Validating an invalid component ==="
# Make a copy again
cp registry.json registry.json.backup

# Make an invalid change (missing required 'type' field)
node -e "const fs = require('fs'); const reg = JSON.parse(fs.readFileSync('registry.json')); reg.items.push({name: 'invalid-component', title: 'Invalid Component', description: 'Missing required type field', files: []}); fs.writeFileSync('registry.json', JSON.stringify(reg, null, 2));"

echo "📝 Made temporary change to registry.json (added an invalid test-component)"
echo "🔄 Running validation... (this should fail)"

# Run the validation directly - this should fail
if npx tsx scripts/lint-registry.ts; then
  echo "❌ ERROR: Validation passed when it should have failed!"
else
  echo "✅ Great! Validation correctly identified the invalid component"
fi

# Restore the original registry.json
mv registry.json.backup registry.json

echo -e "\n🏁 Validation test complete."
echo "🛡️  With husky and lint-staged set up, your registry will be protected against invalid components!" 