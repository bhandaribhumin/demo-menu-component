'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-91531806.js');

const testMenuCss = ":host{display:block}#menuToggle{display:block;position:relative;top:30px;left:50px;z-index:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#menuToggle a{text-decoration:none;color:#232323;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}#menuToggle a:hover{color:tomato}#menuToggle input{display:block;width:40px;height:32px;position:absolute;top:-7px;left:-5px;cursor:pointer;opacity:0;z-index:2;-webkit-touch-callout:none}#menuToggle span{display:block;width:33px;height:4px;margin-bottom:5px;position:relative;background:#cdcdcd;border-radius:3px;z-index:1;-webkit-transform-origin:4px 0px;transform-origin:4px 0px;-webkit-transition:background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease,\n    -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);transition:background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease,\n    -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);transition:transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;transition:transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),\n    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease,\n    -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1)}#menuToggle span:first-child{-webkit-transform-origin:0% 0%;transform-origin:0% 0%}#menuToggle span:nth-last-child(2){-webkit-transform-origin:0% 100%;transform-origin:0% 100%}#menuToggle input:checked~span{opacity:1;-webkit-transform:rotate(45deg) translate(-2px, -1px);transform:rotate(45deg) translate(-2px, -1px);background:#232323}#menuToggle input:checked~span:nth-last-child(3){opacity:0;-webkit-transform:rotate(0deg) scale(0.2, 0.2);transform:rotate(0deg) scale(0.2, 0.2)}#menuToggle input:checked~span:nth-last-child(2){-webkit-transform:rotate(-45deg) translate(0, -1px);transform:rotate(-45deg) translate(0, -1px)}#menu{position:absolute;width:300px;margin:-100px 0 0 -50px;padding:50px;padding-top:125px;background:#ededed;list-style-type:none;-webkit-font-smoothing:antialiased;-webkit-transform-origin:0% 0%;transform-origin:0% 0%;-webkit-transform:translate(-100%, 0);transform:translate(-100%, 0);-webkit-transition:-webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);transition:-webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);transition:transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);transition:transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1)}#menu li{padding:10px 0;font-size:22px}#menuToggle input:checked~ul{-webkit-transform:none;transform:none}";

const TestMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null, index.h("nav", { role: "navigation" }, index.h("div", { id: "menuToggle" }, index.h("input", { type: "checkbox" }), index.h("span", null), index.h("span", null), index.h("span", null), index.h("ul", { id: "menu" }, index.h("a", { href: "#" }, index.h("li", null, "Home")), index.h("a", { href: "#" }, index.h("li", null, "About")), index.h("a", { href: "#" }, index.h("li", null, "Info")), index.h("a", { href: "#" }, index.h("li", null, "Contact"))))))));
    }
};
TestMenu.style = testMenuCss;

exports.test_menu = TestMenu;
