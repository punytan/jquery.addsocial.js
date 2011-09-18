#!/bin/sh

curl \
    -d output_info=compiled_code \
    -d compilation_level=SIMPLE_OPTIMIZATIONS \
    -d code_url=https://raw.github.com/punytan/jquery.addsocial.js/master/jquery.addsocial.js \
    http://closure-compiler.appspot.com/compile \
> jquery.addsocial.min.js
