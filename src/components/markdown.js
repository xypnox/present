import React from 'react';
import { Remarkable } from 'remarkable';
import hljs from 'highlight.js';

let md = new Remarkable({
  html: true, // Enable HTML tags in source

  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}

    return ''; // use external default escaping
  }
});
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
