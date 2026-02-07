#!/bin/bash
set -e

echo "Running CI pipeline..."

npm install
npm test
./build.sh

echo "CI pipeline succeeded"