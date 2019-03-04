#!/bin/bash

# create bundle folder if not exists
mkdir -p bundle;

#create target destination variable
TARGET_FILE="bundle/zeppelin-element-library.css"

# copy bundled css file from react app to bundle folder
find build/static/css -name \*.css -exec cp {} $TARGET_FILE \;

# delete sourceMapping comment line from css file
sed -i '' 's@/\*.*\*/@@g' $TARGET_FILE 