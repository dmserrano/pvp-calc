#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git add -A
git commit -m "Deploy"

git push origin master