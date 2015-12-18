#!/bin/bash

TPLS=./src/tpl
PARTIALS=./src/partials
HEADER=$PARTIALS/header.html
FOOTER=$PARTIALS/footer.html
BUILD=.

for file in $TPLS/*.html.tpl ; do
  NAME=$(`basename $file .tpl`)

  cat $HEADER $file $FOOTER > $BUILD/$NAME
done
