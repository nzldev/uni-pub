#!/usr/bin/env bash

git push --follow-tags origin main
yarn build
npm publish --access public