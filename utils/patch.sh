#!/bin/sh

# This will 'patch' mocha to update the colours to a more solarized-friendly
# version.
# Run it in your working directory after an npm install to affect local versions
# of mocha.
# Run it in /usr/lib/node_modules (the directory may vary according to your
# system) to affect a global install of mocha.
#
# Original idea from actionshrimp (see
# https://github.com/mochajs/mocha/issues/802#issuecomment-36736373).

remplacements="                             \
  s/pass: 90/pass: 92/;                     \
  s/'error stack': 90/'error stack': 92/;   \
  s/fast: 90/fast: 92/;                     \
  s/light: 90/light: 92/;                   \
  s/'diff gutter': 90/'diff gutter': 92/;   \
"

grep -lr "pass: 90," node_modules/mocha | xargs --no-run-if-empty sed -i "$remplacements"
