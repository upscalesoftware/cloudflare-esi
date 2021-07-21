import Dom from './Dom';

export default class DirectiveRemove {
  /**
   * @param {Dom} dom
   */
  constructor(dom) {
    this.dom = dom;
  }

  /**
   * @param {Element} element
   */
  process(element) {
    this.dom.removePairTag(element);
  }
}
