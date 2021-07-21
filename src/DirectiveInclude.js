import Mime from './Mime';
import Dom from './Dom';
import Template from './Template';
import { client } from './client';

export default class DirectiveInclude {
  /**
   * @param {Mime} mime
   * @param {Dom} dom
   * @param {Function} fetch
   */
  constructor(mime, dom, fetch = client) {
    this.mime = mime;
    this.dom = dom;
    this.fetch = fetch;
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
    let response = await this.fetch(template.resolve(src));
    if (!response.ok && alt) {
      response = await this.fetch(template.resolve(alt));
    }
    if (response.ok) {
      this.dom.replaceUnaryTag(element, await response.text(), this.mime.isHtml(response));
    } else if (onerror === 'continue') {
      this.dom.removeUnaryTag(element);
    }
  }
}
