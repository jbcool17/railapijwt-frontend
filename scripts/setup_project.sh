#!/bin/sh

echo '===> Starting Project setup...'

echo ''
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo '===> Setting up jekyll generator...'
cd _site_generator #&& bundle
cd ..
echo ''
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo '===> Setting up react mini sites...'
echo '===> Credentials site...'
cd _clients/credentials && npm install

echo '===> Hockey site...'
cd ../hockey && npm install

echo '===> React mini sites have been setup.'
cd ../../

echo ''
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo '===> Updating public folder...'
./scripts/build_all.sh

echo ''
echo "PROJECT SETUP IS NOW COMPLETE!"
