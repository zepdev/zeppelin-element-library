#!/bin/bash

# create bundle folders if not exist
mkdir -p bundle;
mkdir -p assets/fonts;
mkdir -p assets/icons;
mkdir -p assets/sketch;
mkdir -p assets/logos;

#create target destination variable
TARGET_FILE="bundle/zel.css"

# copy build css file from react app build to main folder
find build/static/css -name \*.css -exec cp {} $TARGET_FILE \;

# copy zel.css file from bundle to main folder
cp -r bundle/zel.css .

# copy guidelines.json file from src to main folder
cp -r src/themes/*.json .

# copy fonts into assets folder
cp -r src/assets/fonts/* assets/fonts

# copy icons folder into assets folder
cp -r src/assets/icons/* assets/icons

# copy logos folder into assets folder
cp -r src/assets/logos/* assets/logos

# copy sketch file into assets folder
cp -r src/assets/sketches/zds-library.sketch assets/sketch

# delete sourceMapping comment line from css file
sed -i.bak 's@/\*.*\*/@@g' $TARGET_FILE
rm $TARGET_FILE.bak

# change fonts path in css files
sed -i.bak 's@/static/media/@../assets/fonts/@g' $TARGET_FILE
rm $TARGET_FILE.bak

# delete hash from font name in css file
for font in eot woff woff2 ttf svg
do
    sed -i.bak 's/\(\.\)\(.[^\.]*\)\(\.'$font'\)/\3/g' $TARGET_FILE

done
rm $TARGET_FILE.bak

if [[ -z "${CIRCLE_TAG}" ]]; then
  ZEL_VERSION="v0.0.0" # not inside CI run, just testing
else
  ZEL_VERSION="${CIRCLE_TAG}"
fi

(echo "/* zeppelin-element-library version ${ZEL_VERSION} */"; cat $TARGET_FILE) > tmpfile
mv tmpfile $TARGET_FILE

# gzip files
for file in bundle/*.min.js; do gzip -k -f $file; done

