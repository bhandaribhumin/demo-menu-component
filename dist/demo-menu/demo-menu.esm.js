import { p as patchBrowser, b as bootstrapLazy } from './index-dfde3a0a.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["test-menu",[[1,"test-menu"]]]], options);
});
