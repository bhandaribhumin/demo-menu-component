import { a as patchEsm, b as bootstrapLazy } from './index-11a4e920.js';
var defineCustomElements = function (win, options) { return patchEsm().then(function () {
    return bootstrapLazy([["test-menu", [[1, "test-menu"]]]], options);
}); };
export { defineCustomElements };
