#!/usr/bin/env node

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CONFIG_PATH = join(__dirname, 'custom-domain.json');

// Validation rules
const MIN_LENGTH = 5;
const MAX_LENGTH = 50;
const VALID_PATTERN = /^[a-zA-Z0-9-]+$/;

function validateSlug(slug) {
  const errors = [];

  // Check length
  if (slug.length < MIN_LENGTH) {
    errors.push(`Slug is too short (${slug.length} characters). Minimum length is ${MIN_LENGTH} characters.`);
  }
  if (slug.length > MAX_LENGTH) {
    errors.push(`Slug is too long (${slug.length} characters). Maximum length is ${MAX_LENGTH} characters.`);
  }

  // Check for spaces
  if (slug.includes(' ')) {
    errors.push('Slug contains spaces. Spaces are not allowed in domain slugs.');
  }

  // Check for dots
  if (slug.includes('.')) {
    errors.push('Slug contains dots. Dots are not allowed in domain slugs.');
  }

  // Check for invalid characters
  if (!VALID_PATTERN.test(slug)) {
    errors.push('Slug contains invalid characters. Only letters (a-z, A-Z), numbers (0-9), and hyphens (-) are allowed.');
  }

  // Check if starts or ends with hyphen
  if (slug.startsWith('-') || slug.endsWith('-')) {
    errors.push('Slug cannot start or end with a hyphen.');
  }

  return errors;
}

function main() {
  try {
    // Read the configuration file
    const configContent = readFileSync(CONFIG_PATH, 'utf-8');
    const config = JSON.parse(configContent);

    if (!config.slug) {
      console.error('❌ ERROR: No "slug" field found in custom-domain.json');
      process.exit(1);
    }

    const slug = config.slug;
    console.log(`Validating custom domain slug: "${slug}"`);

    // Validate the slug
    const errors = validateSlug(slug);

    if (errors.length > 0) {
      console.error('\n❌ VALIDATION FAILED\n');
      console.error('The custom domain slug is invalid:\n');
      errors.forEach((error, index) => {
        console.error(`  ${index + 1}. ${error}`);
      });
      console.error('\n📋 Requirements:');
      console.error(`  • Length: ${MIN_LENGTH}-${MAX_LENGTH} characters`);
      console.error('  • Allowed: letters (a-z, A-Z), numbers (0-9), hyphens (-)');
      console.error('  • Disallowed: spaces, dots, special characters');
      console.error('  • Cannot start or end with a hyphen\n');
      console.error('💡 Example valid slugs:');
      console.error('  • "ai-master" (current valid slug)');
      console.error('  • "aimaster"');
      console.error('  • "ai-master-app"\n');
      console.error(`Please update the slug in: ${CONFIG_PATH}\n`);
      process.exit(1);
    }

    console.log('✅ Validation passed! The custom domain slug is valid.\n');
    process.exit(0);
  } catch (error) {
    console.error('❌ ERROR: Failed to validate custom domain slug');
    console.error(error.message);
    process.exit(1);
  }
}

main();
