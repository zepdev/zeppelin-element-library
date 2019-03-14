#!/bin/bash

# create bundle folders if not exist
mkdir -p bundle;
mkdir -p bundle/assets/fonts;

#create target destination variable
TARGET_FILE="bundle/zeppelin-element-library.css"

# copy bundled css file from react app to bundle folder
find build/static/css -name \*.css -exec cp {} $TARGET_FILE \;

# copy fonts into bundle folder
cp -r build/static/media/* bundle/assets/fonts 


### TODO: For local use on macOS, please install gnu-sed first!
# brew install gnu-sed and if you need to use it as "sed", you can add a "gnubin" directory
# to your PATH from your bashrc like: PATH="/usr/local/opt/gnu-sed/libexec/gnubin:$PATH"

# delete sourceMapping comment line from css file
sed -i 's@/\*.*\*/@@g' $TARGET_FILE 

# change fonts path in css files
sed -i 's#/static/media/#assets/fonts/#g' $TARGET_FILE 

##########################################################

# gzip files
for file in bundle/*.min.js bundle/*.css; do gzip -k -f $file; done
