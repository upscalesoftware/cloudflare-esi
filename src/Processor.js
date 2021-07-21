import Mime from './Mime';
import Template from './Template';

export default class Processor {
  /**
   * @param {Mime} mime
   * @param {Object} directives
   */
  constructor(mime, directives) {
    this.mime = mime;
    this.directives = directives;
  }
  
  /**
   * @param {Request} request
   * @returns {Promise<Response>}
   */
  async serve(request) {
    let response = await fetch(request);
    if (!this.mime.isHtml(response)) {
      return response;
    }
    let template = new Template(request);
    return new HTMLRewriter()
      .on('*', {
        element: (element) => {
          let directive = this.directives[element.tagName];
          if (directive && !element.removed) {
            return directive.process(element, template);
          }
        }
      })
      .transform(response);
  }
}
