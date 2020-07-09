import { a as patchEsm, b as bootstrapLazy } from './index-11a4e920.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["test-menu",[[1,"test-menu"]]]], options);
});

export { defineCustomElements };
