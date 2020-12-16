#!/bin/bash
dir_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" || exit ; pwd -P )

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

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
echo -e "\n${green}Prefixing filenames done.${reset}\n"

#optimize SVGs https://github.com/svg/svgo
echo "Starting SVG optimization ..."
svgo -f . -o ../SVG -p 2 --disable=removeTitle,removeViewBox
echo -e "\n${green}SVG optimization done.${reset}"

#create SVG sprite
echo "Starting SVG sprite creation..."
cd "$dir_path"/src/assets/icons || exit
mkdir -p sprite
echo -e "\n${green}SVG sprite creation done.${reset}"

cd "$dir_path"/src/assets/icons/SVG || exit
spritesh --output ../sprite/icons.svg

#copy svgxuse polyfill script to sprite folder
cd "$dir_path"/src/assets/icons/sprite || exit
if [[ -f svgxuse.min.js ]]
then
  echo -e "\nFile ${green}'svgxuse.min.js'${reset} already available in sprite folder."
else
  cp -r "$dir_path"/node_modules/svgxuse/svgxuse.min.js .
  echo -e "\nFile ${green}'svgxuse.min.js'${reset} successfully added to sprite folder."
fi


# zip SVG icons
cd "$dir_path"/src/assets/icons/SVG || exit
zip -r -q icons.zip .
mv icons.zip ../
echo -e "\nFile ${green}'icons.zip'${reset} successfully created."

# zip sprite
cd "$dir_path"/src/assets/icons/sprite || exit
zip -r -q sprite.zip .
mv sprite.zip ../
echo -e "\nFile ${green}'sprite.zip'${reset} successfully created."

cd "$dir_path" || exit
