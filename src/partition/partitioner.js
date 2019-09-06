import { densitySingle } from './density';

export default function partitioner(
  markdown,
  setting = { densityLimit: 7, strict: false }
) {
  let lines = markdown.split('\n');

  let slides = [];
  let slide = '';
  let densityVal = 0;
  let codeblock = false;

  // console.log(lines);

  /*
    We need to divide the markdown with equal density without breaking the blocks

    Blocks are:

      - Quotations
      - Code
      - Lists

    In these, only code block can have a "empty line"

    Thus we only need to track opening and closing of code, otherwise add to slide.

    Check whether the density of slide is > slide limit.
  */

  for (let line of lines) {
    if (setting.strict) {
      if (line !== '---') {
        slide += line + '\n';
      } else {
        slides.push(slide);
        slide = '';
      }
    } else {
      if (line.startsWith('---')) {
        if (slide) {
          slides.push(slide);
        }
        slide = '';
        densityVal = 0;
      } else if (line.startsWith('```')) {
        codeblock = !codeblock;
        if (!codeblock) {
          densityVal += 8;
        }
        slide += line;
      } else if (codeblock) {
        slide += line;
      } else if (line !== '' && !codeblock) {
        let dVal = densitySingle(line);

        if (dVal.type === 'head') {
          if (slide) {
            slides.push(slide);
          }
          slide = line;
        } else {
          densityVal += dVal.value;
          slide += line;
        }
        // console.log(line, densityVal);
      }
      slide += '\n';

      if ((line === '') & (densityVal > setting.densityLimit)) {
        slides.push(slide);
        slide = '';
        densityVal = 0;
      }
    }
  }

  if (slide !== '') {
    slides.push(slide);
  }

  console.log(slides);
  return slides;
}
