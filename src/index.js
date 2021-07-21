import Mime from './Mime';
import Dom from './Dom';
import Processor from './Processor';
import DirectiveInclude from './DirectiveInclude';
import DirectiveComment from './DirectiveComment';
import DirectiveRemove from './DirectiveRemove';

const mime = new Mime();
const dom = new Dom();
const include = new DirectiveInclude(mime, dom);
const processor = new Processor(mime, {
  'esi:include': include,
  'esi:comment': new DirectiveComment(dom),
  'esi:remove': new DirectiveRemove(dom),
});

// Enable recursive template processing
include.fetch = processor.serve.bind(processor);

addEventListener('fetch', event => {
  event.respondWith(processor.serve(event.request));
});
