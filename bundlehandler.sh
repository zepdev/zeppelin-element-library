#!/bin/bash
DIR_PATH=$(
  cd "$(dirname "${BASH_SOURCE[0]}")"
  pwd -P
)

echo "delete old icons folder"
rm -rf assets/icons

# create bundle folders if not exist
mkdir -p bundle
mkdir -p assets/fonts
mkdir -p assets/icons
mkdir -p assets/sketch
mkdir -p assets/logos

#create target destination variable
TARGET_FILE="bundle/zel.css"

# copy build css file from react app build to bundle
echo -e "\nCopy build css file from react app build to bundle folder"
find build/static/css -name \*.css -exec cp {} $TARGET_FILE \;

# copy guidelines.json file from src to project root
echo -e "\nCopy guidelines.json file from src to project root"
cp -r src/themes/*.json .

# copy fonts into assets folder
echo -e "\nCopy fonts into assets folder"
cp -r src/assets/fonts/* assets/fonts

# zip SVG icons
echo -e "\nzip icons."
cd "$DIR_PATH"/src/assets/icons/SVG || exit
zip -r -q icons.zip .
mv icons.zip ../
echo -e "\nFile 'icons.zip' successfully created."

# zip sprite
cd "$DIR_PATH"/src/assets/icons/sprite || exit
zip -r -q sprite.zip .
mv sprite.zip ../
cd "$DIR_PATH" || exit
echo -e "\nFile 'sprite.zip' successfully created."

# copy icons folder into assets folder
echo -e "\nCopy icons folder into assets folder"
cp -r src/assets/icons/ assets/icons
rm -rf assets/icons/raw

# delete icon zip files in src folder
echo -e "\nDelete files:"
rm -v src/assets/icons/*.zip

# copy logos folder into assets folder
echo -e "\nCopy logos folder into assets folder"
cp -r src/assets/logos/* assets/logos

# copy sketch file into assets folder
echo -e "\nCopy sketch file into assets folder"
cp -r src/assets/sketches/zds-library.sketch assets/sketch

# delete sourceMapping comment line from css file
echo -e "\nDelete sourceMapping comment line from css file"
sed -i.bak 's@/\*.*\*/@@g' $TARGET_FILE
rm $TARGET_FILE.bak

# change fonts path in css files
echo -e "\nAdjust fonts path in css files"
sed -i.bak 's@/static/media/@../assets/fonts/@g' $TARGET_FILE
rm $TARGET_FILE.bak

# delete hash from font name in css file
# WARNING: sed does not support PCRE
echo -e "\nDelete hash from font names in css file"
for font in eot woff ttf svg; do #woff2 matches with woff
  sed -i.bak 's/\(\.\)\(.[^\.]*\)\(\.'$font'\)/\3/g' $TARGET_FILE
done
rm $TARGET_FILE.bak

echo -e "\nAdd ZEL version comment to css file"
if [[ -z "${CIRCLE_TAG}" ]]; then
  ZEL_VERSION="v0.0.0"
else
  ZEL_VERSION="${CIRCLE_TAG}"
fi

(
  echo "/* zeppelin-element-library version ${ZEL_VERSION} */"
  cat $TARGET_FILE
) >tmpfile
mv tmpfile $TARGET_FILE

# create a scss copy of zel.css (zeppelin.com use case)
echo -e "\nCreated .scss copy of zel.css"
cp bundle/zel.css bundle/zel.scss

# gzip files
echo -e "\ngzip bundled minified js files"
for file in bundle/*.min.js; do gzip -k -f $file; done
