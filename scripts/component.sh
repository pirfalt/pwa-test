#!/usr/bin/env bash

name="${1:?}"
mkdir "src/components/$name"
for f in src/components/_Example/*; do
  [[ -e "$f" ]] || break

  new_f=$(echo "$f" | sed -E "s/_Example/$name/g")
  echo "$f" '->' "$new_f"
  cp "$f" "$new_f"
  sed -E -i "s/_Example/$name/g" "$new_f"
done