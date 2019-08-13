import React from 'react';
import { Remarkable } from 'remarkable';
let md = new Remarkable();

let Markdown = function({ source }) {
  var markdown = md.render(source);
  return <div dangerouslySetInnerHTML={{ __html: markdown }} />;
};

export default Markdown;
