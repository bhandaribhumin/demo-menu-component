import { r as registerInstance, h, H as Host } from './index-dfde3a0a.js';

const testMenuCss = ":host{display:block}";

const TestMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
TestMenu.style = testMenuCss;

export { TestMenu as test_menu };
