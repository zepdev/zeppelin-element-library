#!/bin/bash
DIR_PATH=$(
  cd "$(dirname "${BASH_SOURCE[0]}")"
  pwd -P
)

RAW_PATH="$DIR_PATH"/src/assets/icons/raw

#prefix and transform SVG file names in raw folder
prefix_file_names() {
  echo -e "\nStart prefixing filenames..."
  cd "$RAW_PATH" || return
  for i in *.svg; do
    if [[ $i != zep-* ]]; then
      prefixed_name=zep-"${i%.svg}".svg
      lowercase_name=$(echo "$prefixed_name" | tr '[:upper:]' '[:lower:]')
      dashed_name="${lowercase_name//[ _]/-}"
      mv -v "$i" "$dashed_name"
    else
      echo -e "skip ${i} (already prefixed)."
    fi
  done
  cd "$DIR_PATH" || return
  echo -e "\nPrefixing filenames done.\n"
}

# replace fill="#000000" with fill="currentColor" in all svg files
replace_black_fill() {
  echo -e "\nStart replacing black fillings with currentColor..."
  cd "$RAW_PATH" || return
  for i in *.svg; do
    sed -i.bak 's@fill="#000000"@fill="currentColor"@g' "$i"
    rm "$i".bak
  done
  cd "$DIR_PATH" || return
  echo -e "\nReplacing black fillings with currentColor done."
}

#optimize SVGs https://github.com/svg/svgo
optimize_svgs() {
  cd "$DIR_PATH"/src/assets/icons || return
  echo -e "\ndelete old /src/assets/icons/SVG folder"
  rm -rf ./SVG
  echo -e "\nStarting SVG optimization and move optimized files to new./src/assets/icons/SVG folder ..."
  svgo -f ./raw -o ./SVG -p 2 --disable=removeTitle,removeViewBox
  cd "$DIR_PATH" || return
  echo -e "\nSVG optimization done."
}

#create SVG sprite
create_svg_sprite() {
  echo -e "\nStarting SVG sprite creation..."
  cd "$DIR_PATH"/src/assets/icons || return
  mkdir -p sprite

  cd "$DIR_PATH"/src/assets/icons/SVG || return
  spritesh --output ../sprite/zep-icons-sprite.svg
  cd "$DIR_PATH" || return
  echo -e "\nSVG sprite creation done."
}

#copy svgxuse polyfill script to sprite folder
copy_svgxuse_polyfill() {
  cd "$DIR_PATH"/src/assets/icons/sprite || return
  if [[ -f svgxuse.min.js ]]; then
    echo -e "\nFile 'svgxuse.min.js' already available in sprite folder."
  else
    cp -r "$DIR_PATH"/node_modules/svgxuse/svgxuse.min.js .
    echo -e "\nFile 'svgxuse.min.js' successfully added to sprite folder."
  fi
  cd "$DIR_PATH" || return
}

process_raw_svgs() {
  prefix_file_names
  replace_black_fill
  optimize_svgs
  create_svg_sprite
  copy_svgxuse_polyfill
}

if [[ -d "$RAW_PATH" ]]; then
  process_raw_svgs
else
  echo "Can't process SVGs, ${RAW_PATH} does not exist."
fi
