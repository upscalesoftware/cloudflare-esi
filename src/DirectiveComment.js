import Dom from './Dom';

export default class DirectiveComment {
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
    this.dom.removeUnaryTag(element);
  }
}
