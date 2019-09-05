// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import density from './partition/density';
import partitioner from './partition/partitioner';
const assert = require('assert');

it('Correctly evaluates density', () => {
  assert.equal(density('# I am h1'), 8);
  assert.equal(density('## I am h2'), 6);
  assert.equal(density('### I am h1'), 4);
  assert.equal(density('#### I am h1'), 3);
  assert.equal(density('##### I am h1'), 2);
  assert.equal(density('###### I am h1'), 1);

  assert.equal(density('> I am quote'), 4);

  // assert.equal(density('```python\n print(OOOPS)```'), 4);
});

it('Checks for slides', () => {
  partitioner(
    `
# Present

This is a software to present slides.

This renders markdown directly into presentable slides. This presentation itself is made in Present!

## How to present a Markdown file?

Just upload a markdown file and we handle all the rest. The slides are distributed with specifics such as the amount of text and headings so that the text is never too small to present.

## Images?

![](https://i.imgur.com/wMACxO4.png)

## Any keybindings?

| Shortcut Keys             | Effect                   |
| ------------------------- | ------------------------ |
| \`Enter\` or \`n\` or \`Space\` | Change to next slide     |
| \`f\`                       | Toggle Fullscreen Mode   |
| \`p\`                       | Change to previous slide |
| \`q\`                       | Escape presentation mode |

## Codeblock?

## Any Gottcha's?

None!

`
  );
});
