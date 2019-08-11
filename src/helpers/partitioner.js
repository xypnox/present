function partitioner(markdown) {
  let lines = markdown.split('\n');
  let slides = [];

  let slide = '\n';
  let paraCount = 0;
  let code = false;

  for (let i = 0; i < lines.length; i++) {
    console.log(i, lines[i]);

    // Handle headings
    if (!code && lines[i].startsWith('#')) {
      if (slide) {
        slides.push(slide);
        console.log('we break here');
        slide = '\n';
      }
      slide += '\n' + lines[i];
    }

    // Handle code blocks
    else if (code || lines[i].startsWith('```')) {
      if (code) {
        if (lines[i].startsWith('```')) {
          code = !code;
          if (slide) {
            slides.push(slide);
            console.log('we break here');
          }
          slide = lines[i];
        } else {
          slide += '\n' + lines[i];
        }
      } else {
        slide += '\n' + lines[i];
        if (slide) {
          slides.push(slide);
          console.log('we break here');
        }
        slides = '\n';
      }
    }

    // Handle Regular Paragraphs Lists etc.
    else if (!code && lines[i]) {
      // console.log(lines[i], paraCount);
      paraCount++;
      if (paraCount > 3) {
        if (slide) {
          slides.push(slide);
          console.log('we break here');
        }
        paraCount = 0;
        slide = lines[i];
      } else {
        slide += '\n' + lines[i];
      }
    } else {
      slide += '\n';
    }
  }
  console.log(slides);
  return slides;
}

export default partitioner;
