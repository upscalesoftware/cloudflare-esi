import Mime from './Mime';
import Dom from './Dom';
import Processor from './Processor';
import DirectiveInclude from './DirectiveInclude';
import DirectiveComment from './DirectiveComment';
import DirectiveRemove from './DirectiveRemove';

const mime = new Mime();
const dom = new Dom();
const processor = new Processor(mime, {
  'esi:include': new DirectiveInclude(mime, dom),
  'esi:comment': new DirectiveComment(dom),
  'esi:remove': new DirectiveRemove(dom),
});

addEventListener('fetch', event => {
  event.respondWith(processor.serve(event.request));
});
