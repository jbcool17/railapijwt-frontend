#!/bin/sh
echo "___> Running Hockey Build..."
cd _clients/hockey && npm run build

echo "___> Build for jekyll site..."

echo '---' >> build/index_temp.html
echo 'layout: default' >> build/index_temp.html
echo '---' >> build/index_temp.html
cat build/index.html >> build/index_temp.html
mv build/index_temp.html build/index.html

echo "---> Cleaning up old files..."
rm -rf ../../hockey
mkdir ../../hockey

echo "___> Starting Copy"
cp -pvr ./build/* ../../hockey/

echo "Hockey BUILD IS DONE!"
