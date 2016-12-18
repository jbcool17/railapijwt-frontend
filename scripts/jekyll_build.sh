#!/bin/sh
echo "___> Running Jekyll Build..."

cd _site_generator
jekyll build
cp -pvr ./_site/* ../_site/

echo "JEKYLL BUILD IS DONE!"
