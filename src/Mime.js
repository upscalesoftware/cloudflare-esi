export default class Mime {
  /**
   * @param {Response} response
   * @returns {boolean}
   */
  isHtml(response) {
    let mimeType = response.headers.get('Content-Type');
    return mimeType && mimeType.startsWith('text/html');
  }
}
