import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'test-menu',
  styleUrl: 'test-menu.css',
  shadow: true,
})
export class TestMenu implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
