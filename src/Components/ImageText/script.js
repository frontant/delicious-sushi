import { VisibilityObserver } from '~/shared/scripts/VisibilityObserver';

class ImageText extends window.HTMLDivElement {
  connectedCallback() {
    const observer = new VisibilityObserver(0.4);
    observer.observe(this);
  }
}

window.customElements.define('component-imagetext', ImageText, {
  extends: 'div',
});
