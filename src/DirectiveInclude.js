import Mime from './Mime';
import Dom from './Dom';
import Template from './Template';

export default class DirectiveInclude {
  /**
   * @param {Mime} mime
   * @param {Dom} dom
   */
  constructor(mime, dom) {
    this.mime = mime;
    this.dom = dom;
  }

  /**
   * @param {Element} element
   * @param {Template} template
   * @returns {Promise}
   */
  async process(element, template) {
    let src = element.getAttribute('src');
    let alt = element.getAttribute('alt');
    let onerror = element.getAttribute('onerror');
    if (!src) {
      return;
    }
    let response = await fetch(template.resolve(src));
    if (!response.ok && alt) {
      response = await fetch(template.resolve(alt));
    }
    if (response.ok) {
      this.dom.replaceUnaryTag(element, await response.text(), this.mime.isHtml(response));
    } else if (onerror === 'continue') {
      this.dom.removeUnaryTag(element);
    }
  }
}
