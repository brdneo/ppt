#!/bin/bash
mkdir -p src/assets/modules
for pdf in pdfs/*.pdf; do
    echo "Processing $pdf..."
    basename=$(basename "$pdf" .pdf)
    temp_dir="tmp_$basename"
    mkdir -p "$temp_dir"
    pdfimages -png "$pdf" "$temp_dir/img"
    # Find the largest image file in the directory
    largest_file=$(ls -S "$temp_dir"/*.png 2>/dev/null | head -n 1)
    if [ -n "$largest_file" ]; then
        cp "$largest_file" "src/assets/modules/$basename.png"
        echo "Extracted $largest_file to $basename.png"
    else
        echo "No images found for $pdf"
    fi
    rm -rf "$temp_dir"
done
echo "Done!"
