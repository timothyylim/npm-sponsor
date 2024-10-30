#!/usr/bin/env node

const command = process.argv[2];
const path = process.argv[3];

if (command === 'add' && path) {
    console.log(`Directory path: ${path}`);
} else {
    console.log('Usage: npm-sponsor add <path-to-directory>');
}
