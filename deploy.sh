#!/bin/bash
set -e

echo "Deploying application..."

rm -rf server/current
cp -r dist server/current

echo "Deployment complete"