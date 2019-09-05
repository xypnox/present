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
      if (value > 4) {
        value -= 2;
      } else {
        value--;
      }
    }
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

// This function returns the density value of any single markdown string passed to it
function densitySingle(markdown) {
  markdown = markdown.trim();
  let firstChar = markdown[0];
  if (markdown === '') {
    return 0;
  } else if (firstChar === '#') {
    return densityHead(markdown);
  } else if (markdown.startsWith('> ')) {
    return densityValue.blockquote;
  } else if (markdown.startsWith(`![`)) {
    return densityValue.image;
  }
  return densityText(markdown);
}

// This function returns the density of a set of markdown lines separated by `\n`
// Note: This function does not handle codeblocks
function density(markdown) {
  let densityVal = 0;

  for (let line of markdown.split('\n')) {
    densityVal += densitySingle(line);
  }

  return densityVal;
}

export default density;
export { densityHead, densityText, densitySingle };
