const densityValue = {
  blockquote: 4,
  image: 4
};

// Calculates density of Headers h1 -> 6 h2 -> 5 ... etc
function densityHead(markdown) {
  let value = 10;
  for (let i = 0; i < markdown.length; i++) {
    if (markdown[i] !== '#') {
      break;
    } else {
      value--;
    }
  }

  if (value > 6) {
    return 10;
  }

  return value;
}

// Calculates density of plain text
function densityText(markdown) {
  let wordCount = markdown.split(' ').length;
  if (wordCount <= 2) {
    return 1;
  }
  return Math.log(wordCount);
}

// This function returns the type and density value of any single markdown string passed to it
function densitySingle(markdown) {
  markdown = markdown.trim();
  let firstChar = markdown[0];

  if (markdown === '') {
    return {
      type: 'empty',
      value: 0
    };
  } else if (firstChar === '#') {
    return {
      type: 'head',
      value: densityHead(markdown)
    };
  } else if (markdown.startsWith('> ')) {
    return { type: 'quote', value: densityValue.blockquote };
  } else if (markdown.startsWith(`![`)) {
    return { type: 'image', value: densityValue.image };
  }
  return { type: 'text', value: densityText(markdown) };
}

// This function returns the density value of a set of markdown lines separated by `\n`
// Note: This function does not handle codeblocks, and does not care about type
function density(markdown) {
  let densityVal = 0;

  for (let line of markdown.split('\n')) {
    densityVal += densitySingle(line).value;
  }

  return densityVal;
}

export default density;
export { densityHead, densityText, densitySingle };
