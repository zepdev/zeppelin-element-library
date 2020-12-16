#!/bin/bash
dir_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" || exit ; pwd -P )

#prefix SVG names in raw folder
echo -e "\nStart prefixing filenames..."
cd "$dir_path"/src/assets/icons/raw || exit
for i in *.svg ; do
  if  [[ $i != zep-* ]];
  then
      mv -v $i zep-${i%.svg}.svg
  else
      echo -e "skip ${i} (already prefixed)."
  fi
done
echo -e "\nPrefixing filenames done.\n"

#optimize SVGs https://github.com/svg/svgo
echo "Starting SVG optimization ..."
svgo -f . -o ../SVG -p 2 --disable=removeTitle,removeViewBox
echo -e "\nSVG optimization done."

#create SVG sprite
echo "Starting SVG sprite creation..."
cd "$dir_path"/src/assets/icons || exit
mkdir -p sprite

cd "$dir_path"/src/assets/icons/SVG || exit
spritesh --output ../sprite/icons.svg
echo -e "\nSVG sprite creation done."

#copy svgxuse polyfill script to sprite folder
cd "$dir_path"/src/assets/icons/sprite || exit
if [[ -f svgxuse.min.js ]]
then
  echo -e "\nFile 'svgxuse.min.js' already available in sprite folder."
else
  cp -r "$dir_path"/node_modules/svgxuse/svgxuse.min.js .
  echo -e "\nFile 'svgxuse.min.js' successfully added to sprite folder."
fi
