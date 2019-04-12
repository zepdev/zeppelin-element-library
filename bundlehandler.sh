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

# copy icons folder into bundle folder
cp -r src/assets/icons/* bundle/assets/icons

# rename icons
cd bundle/assets/icons
for f in *.svg
do
    newFileName=$(echo $f | \
     awk '{gsub(/iconsLanguages/, "zepicons")};1' | \
     awk '{gsub(/iconsMiscAction/, "zepicons")};1' | \
     awk '{gsub(/iconsMiscNavigation/, "zepicons")};1' | \
     awk '{gsub(/iconsMiscIndicator/, "zepicons")};1' | \
     awk '{gsub(/iconsSbu/, "zepicons")};1' | \
     awk '{gsub(/iconsSocial/, "zepicons")};1' | \
     awk '{gsub(/[A-Z]/, "-&")};1' | \
     awk '{ print tolower($0) }')
done

# move back to main folder
cd ../../../

# copy icon font to bundle folder
cp -r build/zepicons.* bundle/assets/fonts


# delete sourceMapping comment line from css file
sed -i.bak 's@/\*.*\*/@@g' $TARGET_FILE
rm $TARGET_FILE.bak

# change fonts path in css files
sed -i.bak 's@/static/media/@assets/fonts/@g' $TARGET_FILE
sed -i.bak 's@/zepicons@assets/fonts/zepicons@g' $TARGET_FILE
rm $TARGET_FILE.bak

if [[ -z "${CIRCLE_TAG}" ]]; then
  ZEL_VERSION="v0.0.0" # not inside CI run, just testing
else
  ZEL_VERSION="${CIRCLE_TAG}"
fi

(echo "/* zeppelin-element-library version ${ZEL_VERSION} */"; cat $TARGET_FILE) > tmpfile
mv tmpfile $TARGET_FILE

# gzip files
for file in bundle/*.min.js bundle/*.css; do gzip -k -f $file; done
