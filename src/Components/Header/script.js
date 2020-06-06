import { $ } from '@frontant/utils-dom';
import Rellax from 'rellax';

class Header extends window.HTMLDivElement {
  connectedCallback() {
    const bgImageElem = $('.bgImage > img', this);

    this.rellaxBgImage = new Rellax(bgImageElem, {
      speed: -3,
    });
  }
}

window.customElements.define('component-header', Header, { extends: 'div' });
