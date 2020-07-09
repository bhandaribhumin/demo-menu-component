'use strict';

const index = require('./index-91531806.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["test-menu.cjs",[[1,"test-menu"]]]], options);
});
