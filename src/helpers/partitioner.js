function partitioner(markdown) {
  let lines = markdown.split('\n');

  let slides = [];
  let slide = '\n';
  let paraCount = 0;
  let code = false;
  let table = false;

  for (let i = 0; i < lines.length; i++) {
    // Handle headings
    if (!code && !table && lines[i].startsWith('#')) {
      if (slide) {
        slides.push(slide);
        slide = '\n';
      }
      slide += '\n' + lines[i];
    }

    // Handle code blocks
    else if (code || lines[i].startsWith('```')) {
      if (code) {
        if (lines[i].startsWith('```')) {
          code = !code;
          slide = lines[i];
          if (slide) {
            slides.push(slide);
          }
        } else {
          slide += '\n' + lines[i];
        }
      } else {
        code = !code;
        slide += '\n' + lines[i];
        if (slide) {
          slides.push(slide);
        }
        slide = '\n';
      }
    }

    // Handle Tables
    else if (!code && (table || lines[i].startsWith('|'))) {
      if (table) {
        if (lines[i].startsWith('|')) {
          slide += '\n' + lines[i];
        } else {
          if (slide) {
            slides.push(slide);
          }
          table = !table;
          slide = lines[i];
        }
      } else {
        if (slide) {
          slides.push(slide);
        }
        table = !table;
        slide = lines[i];
      }
    }

    // Handle Regular Paragraphs Lists etc.
    else if (!code && lines[i]) {
      paraCount++;
      if (paraCount > 3) {
        if (slide) {
          slides.push(slide);
        }
        paraCount = 0;
        slide = lines[i];
      } else {
        slide += '\n' + lines[i];
      }
    } else {
      slide += '\n';
    }

    if (i === lines.length - 1) {
      slides.push(slide);
    }
  }
  return slides;
}

export default partitioner;
