#!/bin/sh
git checkout -b gh-pages && ./scripts/build_all.sh

rm -rf _clients
rm -rf _site_generator
mv _site/* .

git add .
git commit -m 'adding site'
git push origin gh-pages
git checkout master
git branch -D gh-pages

echo '----'
echo 'DONE'
echo '----'
