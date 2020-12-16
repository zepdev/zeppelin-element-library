#!/bin/bash
dir_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" || exit ; pwd -P )

#prefix and transform SVG file names in raw folder
echo -e "\nStart prefixing filenames..."
cd "$dir_path"/src/assets/icons/raw || exit
for i in *.svg ; do
  if  [[ $i != zep-* ]];
  then
      prefixed_name=zep-"${i%.svg}".svg
      lowercase_name=$(echo "$prefixed_name" | tr '[:upper:]' '[:lower:]')
      dashed_name=$(echo "$lowercase_name" | sed 's/_/-/g')
      mv -v "$i" "$dashed_name"
  else
      echo -e "skip ${i} (already prefixed)."
  fi
done
echo -e "\nPrefixing filenames done.\n"

# replace fill="#000000" with fill="currentColor" in all svg files
echo -e "\nStart replacing black fillings with currentColor..."
cd "$dir_path"/src/assets/icons/raw || exit
for i in *.svg ; do
  sed -i.bak 's@fill="#000000"@fill="currentColor"@g' "$i"
  rm "$i".bak
done
echo -e "\nReplacing black fillings with currentColor done."

#optimize SVGs https://github.com/svg/svgo
cd "$dir_path"/src/assets/icons || exit
echo -e "\ndelete old /src/assets/icons/SVG folder"
rm -rf ./SVG
echo -e "\nStarting SVG optimization and move optimized files to new./src/assets/icons/SVG folder ..."
svgo -f ./raw -o ./SVG -p 2 --disable=removeTitle,removeViewBox
echo -e "\nSVG optimization done."

#create SVG sprite
echo -e "\nStarting SVG sprite creation..."
cd "$dir_path"/src/assets/icons || exit
mkdir -p sprite

cd "$dir_path"/src/assets/icons/SVG || exit
spritesh --output ../sprite/zep-icons-sprite.svg
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
