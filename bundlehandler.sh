#!/bin/bash

# create bundle folders if not exist
mkdir -p bundle;
mkdir -p bundle/themes;
mkdir -p bundle/assets/fonts;
mkdir -p bundle/assets/icons;

#create target destination variable
TARGET_FILE="bundle/zeppelin-element-library.css"

# copy build css file from react app to bundle folder
find build/static/css -name \*.css -exec cp {} $TARGET_FILE \;

# copy fonts into bundle folder
cp -r src/assets/fonts/* bundle/assets/fonts 

# copy theme folder into bundle folder
cp -r src/themes/* bundle/themes

# copy icons folder into bundle folder and rename icons
cp -r src/assets/icons/* bundle/assets/icons

cd bundle/assets/icons
find . -name 'Icons*.svg' -type f -exec bash -c 'mv "$1" "${1/\/IconsLanguages//}"' -- {} \;
find . -name 'Icons*.svg' -type f -exec bash -c 'mv "$1" "${1/\/IconsMiscAction//}"' -- {} \;
find . -name 'Icons*.svg' -type f -exec bash -c 'mv "$1" "${1/\/IconsMiscNavigation//}"' -- {} \;
find . -name 'Icons*.svg' -type f -exec bash -c 'mv "$1" "${1/\/IconsMiscIndicator//}"' -- {} \;
find . -name 'Icons*.svg' -type f -exec bash -c 'mv "$1" "${1/\/IconsSbu//}"' -- {} \;
find . -name 'Icons*.svg' -type f -exec bash -c 'mv "$1" "${1/\/IconsSocial//}"' -- {} \;
for f in *.svg
do
    myVar=$(echo $f | awk '{gsub(/[A-Z]/, "-&")};1' | awk '{ print tolower($0) }')
    mv $f "zepicons$myVar"
done

# move back to main folder
cd ../../../

# copy icon font to bundle folder
cp -r build/zepicons.* bundle/assets/fonts


# delete sourceMapping comment line from css file
sed -i.bak 's@/\*.*\*/@@g' $TARGET_FILE
rm $TARGET_FILE.bak

# delete hash from font name in css file
for font in eot woff woff2 ttf svg
do 
    sed -i.bak 's/\(\.\)\(.[^\.]*\)\(\.'$font'\)/\3/g' $TARGET_FILE
    
done
rm $TARGET_FILE.bak

# change fonts path in css files
sed -i.bak 's@/static/media/@assets/fonts/@g' $TARGET_FILE
rm $TARGET_FILE.bak

# gzip files
for file in bundle/*.min.js bundle/*.css; do gzip -k -f $file; done
