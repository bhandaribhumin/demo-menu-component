import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "test-menu",
  styleUrl: "test-menu.css",
  shadow: true,
})
export class TestMenu implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot>
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />

              <span></span>
              <span></span>
              <span></span>

              <ul id="menu">
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>About</li>
                </a>
                <a href="#">
                  <li>Info</li>
                </a>
                <a href="#">
                  <li>Contact</li>
                </a>
              </ul>
            </div>
          </nav>
        </slot>
      </Host>
    );
  }
}
