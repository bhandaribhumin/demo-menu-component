'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-91531806.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["test-menu.cjs",[[1,"test-menu"]]]], options);
});

exports.defineCustomElements = defineCustomElements;
