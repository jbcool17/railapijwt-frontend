#!/bin/sh
echo '---> Building and Deploying to public folder...'
echo '---> CREDENTIALS SITE...'
./scripts/build_credentials.sh
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo '---> HOCKEY SITE...'
./scripts/build_hockey.sh
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo '---> JEKYLL SITE...'
./scripts/build_jekyll.sh

echo "BUILD ALL SCRIPT IS COMPLETE!"
