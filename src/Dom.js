export default class Dom {
  /**
   * @param {Element} element
   * @param {string} content
   * @param {boolean} markup
   */
  replaceUnaryTag(element, content, markup = false) {
    element.before(content, {html: markup});
    this.removeUnaryTag(element);
  }

  /**
   * @param {Element} element
   */
  removeUnaryTag(element) {
    element.removeAndKeepContent();
  }

  /**
   * @param {Element} element
   * @param {string} content
   * @param {boolean} markup
   */
  replacePairTag(element, content, markup = false) {
    element.replace(content, {html: markup});
  }

  /**
   * @param {Element} element
   */
  removePairTag(element) {
    element.remove();
  }
}
