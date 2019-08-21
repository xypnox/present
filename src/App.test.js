// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import density from './partition/density';
const assert = require('assert');

it('Correctly evaluates density', () => {
  assert.equal(density('# I am h1'), 6);
  assert.equal(density('## I am h2'), 5);
  assert.equal(density('### I am h1'), 4);
  assert.equal(density('#### I am h1'), 3);
  assert.equal(density('##### I am h1'), 2);
  assert.equal(density('###### I am h1'), 1);

  assert.equal(density('> I am quote'), 4);

  assert.equal(density('```python\n print(OOOPS)```'), 4);
});
