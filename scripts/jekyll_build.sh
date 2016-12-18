#!/bin/sh
echo "___> Running Jekyll Build..."

bundle exec jekyll build
# cp -pvr ./_site/* ../_site/

echo "JEKYLL BUILD IS DONE!"
