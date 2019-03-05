#!/bin/bash

# create bundle folders if not exist
mkdir -p bundle;
mkdir -p bundle/assets/fonts;

#create target destination variable
TARGET_FILE="bundle/zeppelin-element-library.css"

# copy bundled css file from react app to bundle folder
find build/static/css -name \*.css -exec cp {} $TARGET_FILE \;

# copy fonts into bundle folder
cp -r build/static/media/* bundle/assets/fonts 

# delete sourceMapping comment line from css file
sed -i '' 's@/\*.*\*/@@g' $TARGET_FILE 

# change 
sed -i '' 's#/static/media#assets/fonts#g'  $TARGET_FILE 

# gzip files
for file in bundle/*.min.js bundle/*.css; do gzip -k -f $file; done
