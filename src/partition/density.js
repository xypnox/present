const densityValue = {
  code: 4,
  blockquote: 4,
  image: 4
};

// Calculates density of Headers h1 -> 6 h2 -> 5 ... etc
function densityHead(markdown) {
  let value = 7;
  for (let i = 0; i < markdown.length; i++) {
    if (markdown[i] !== '#') {
      break;
    } else {
      value--;
    }
  }

  return value;
}

// Calculates density of plain text
function densityText(markdown) {
  let wordCount = markdown.split(' ').length;
  return Math.log(wordCount);
}

// This function returns the density value of any markdown string passed to it
function density(markdown) {
  markdown = markdown.trim();
  let firstChar = markdown[0];

  if (markdown.startsWith('```')) {
    return densityValue.code;
  } else if (firstChar === '#') {
    return densityHead(markdown.trim());
  } else if (markdown.startsWith('> ')) {
    return densityValue.blockquote;
  } else if (markdown.startsWith(`![`)) {
    return densityValue.image;
  }
}

export default density;
export { densityHead, densityText };
