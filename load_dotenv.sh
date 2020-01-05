#!/usr/bin/env bash
set -o allexport
source .env
set +o allexport
npm run build
sed -i -e "s/%REACT_APP_NAME%/$APP_NAME/g" ./build/index.html
npm run deploy:server