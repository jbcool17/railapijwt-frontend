#!/bin/sh

printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo '===> Deploying to GH-PAGES...'

git checkout -b gh-pages

git add .
git commit -m 'adding site'
git push origin gh-pages
git checkout master
git branch -D gh-pages

printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
echo 'DONE'
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
