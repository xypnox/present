import React from 'react';
import { Remarkable } from 'remarkable';
let md = new Remarkable();
let remarkable_emoji = require('remarkable-emoji');

let Markdown = function({ source }) {
  md.use(remarkable_emoji);
  let twemoji = global.twemoji;
  var markdown = md.render(source);
  if (twemoji) {
    markdown = twemoji.parse(markdown);
  }
  return <div dangerouslySetInnerHTML={{ __html: markdown }} />;
};

export default Markdown;
