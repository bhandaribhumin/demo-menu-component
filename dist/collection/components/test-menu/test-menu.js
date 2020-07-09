import { Component, Host, h } from "@stencil/core";
export class TestMenu {
    render() {
        return (h(Host, null,
            h("slot", null,
                h("nav", { role: "navigation" },
                    h("div", { id: "menuToggle" },
                        h("input", { type: "checkbox" }),
                        h("span", null),
                        h("span", null),
                        h("span", null),
                        h("ul", { id: "menu" },
                            h("a", { href: "#" },
                                h("li", null, "Home")),
                            h("a", { href: "#" },
                                h("li", null, "About")),
                            h("a", { href: "#" },
                                h("li", null, "Info")),
                            h("a", { href: "#" },
                                h("li", null, "Contact"))))))));
    }
    static get is() { return "test-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["test-menu.css"]
    }; }
    static get styleUrls() { return {
        "$": ["test-menu.css"]
    }; }
}
