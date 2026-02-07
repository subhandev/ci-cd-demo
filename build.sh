#!/bin/bash
set -e

echo "Building artifact..."

rm -rf dist
mkdir dist

cp -r app.js package.json node_modules dist/

echo "Build complete"