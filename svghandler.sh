#!/bin/bash
dir_path=$(
  cd "$(dirname "${BASH_SOURCE[0]}")" || exit
  pwd -P
)

raw_path="$dir_path"/src/assets/icons/raw

#prefix and transform SVG file names in raw folder
prefix_file_names() {
  echo -e "\nStart prefixing filenames..."
  cd "$raw_path" || return
  for i in *.svg; do
    if [[ $i != zep-* ]]; then
      prefixed_name=zep-"${i%.svg}".svg
      lowercase_name=$(echo "$prefixed_name" | tr '[:upper:]' '[:lower:]')
      dashed_name=$(echo "$lowercase_name" | sed 's/_/-/g')
      mv -v "$i" "$dashed_name"
    else
      echo -e "skip ${i} (already prefixed)."
    fi
  done
  cd "$dir_path" || return
  echo -e "\nPrefixing filenames done.\n"
}

# replace fill="#000000" with fill="currentColor" in all svg files
replace_black_fill() {
  echo -e "\nStart replacing black fillings with currentColor..."
  cd "$raw_path" || return
  for i in *.svg; do
    sed -i.bak 's@fill="#000000"@fill="currentColor"@g' "$i"
    rm "$i".bak
  done
  cd "$dir_path" || return
  echo -e "\nReplacing black fillings with currentColor done."
}

#optimize SVGs https://github.com/svg/svgo
optimize_svgs() {
  cd "$dir_path"/src/assets/icons || return
  echo -e "\ndelete old /src/assets/icons/SVG folder"
  rm -rf ./SVG
  echo -e "\nStarting SVG optimization and move optimized files to new./src/assets/icons/SVG folder ..."
  svgo -f ./raw -o ./SVG -p 2 --disable=removeTitle,removeViewBox
  cd "$dir_path" || return
  echo -e "\nSVG optimization done."
}

#create SVG sprite
create_svg_sprite() {
  echo -e "\nStarting SVG sprite creation..."
  cd "$dir_path"/src/assets/icons || return
  mkdir -p sprite

  cd "$dir_path"/src/assets/icons/SVG || return
  spritesh --output ../sprite/zep-icons-sprite.svg
  cd "$dir_path" || return
  echo -e "\nSVG sprite creation done."
}

copy_svgxuse_polyfill() {
  #copy svgxuse polyfill script to sprite folder
  cd "$dir_path"/src/assets/icons/sprite || return
  if [[ -f svgxuse.min.js ]]; then
    echo -e "\nFile 'svgxuse.min.js' already available in sprite folder."
  else
    cp -r "$dir_path"/node_modules/svgxuse/svgxuse.min.js .
    echo -e "\nFile 'svgxuse.min.js' successfully added to sprite folder."
  fi
  cd "$dir_path" || return
}

process_raw_svgs() {
  prefix_file_names
  replace_black_fill
  optimize_svgs
  create_svg_sprite
  copy_svgxuse_polyfill
}

if [[ -d "$raw_path" ]]; then
  process_raw_svgs
else
  echo "Can't process SVGs, ${raw_path} does not exist."
fi
