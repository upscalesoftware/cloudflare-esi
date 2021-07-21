export default class Template {
  /**
   * @param {Request} request
   */
  constructor(request) {
    this.request = request;
    this.url = new URL(request.url);
  }

  /**
   * @param {string} url
   * @returns {Request}
   */
  resolve(url) {
    if (url.startsWith('/')) {
      url = this.url.origin + url;
    }
    return new Request(url, this.request);
  }
}
