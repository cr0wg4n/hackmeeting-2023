#!/bin/bash

# Important! install imagemagick before

mkdir ./tmp
path=$(pwd)

for file in "$path"/*
do
    filename="$(basename -- $file)"
    if test -f "$filename"; then
        echo "$filename: resizing..."
        convert $file -resize 400x400 "./tmp/$filename"
        echo "$filename: done!"
    fi
done

echo "Remove the ./tmp directory once you have moved the content"