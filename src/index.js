import Mime from './Mime';
import Dom from './Dom';
import Processor from './Processor';
import DirectiveInclude from './DirectiveInclude';

const mime = new Mime();
const dom = new Dom();
const processor = new Processor(mime, {
  'esi:include': new DirectiveInclude(mime, dom),
});

addEventListener('fetch', event => {
  event.respondWith(processor.serve(event.request));
});
