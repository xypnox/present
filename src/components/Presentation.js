import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { CSSTransition } from 'react-transition-group';

function Presentation({ slides, reset }) {
  const [inProp, setInProp] = useState(false);

  let [state, setState] = useState({
    slides: slides,
    currentSlide: slides.length > 0 ? slides[0] : null,
    currentSlideIndex: slides.length > 0 ? 0 : NaN,
    nextSlide: slides.length > 1 ? slides[1] : null,
    nextSlideIndex: slides.length > 1 ? 1 : NaN
  });

  let finishSlide = e => {
    let slides = state.slides,
      currentSlideIndex = (state.currentSlideIndex + 1) % state.slides.length,
      nextSlideIndex = (state.nextSlideIndex + 1) % state.slides.length;

    if (nextSlideIndex + 1 <= slides.length) {
      setState({
        slides: slides,
        currentSlide: slides[currentSlideIndex],
        currentSlideIndex: currentSlideIndex,
        nextSlide: slides[nextSlideIndex],
        nextSlideIndex: nextSlideIndex
      });
      setInProp(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('keypress', e => {
      console.log(e);
      if (e.key === 'Enter' || e.key === ' ') {
        setInProp(true);
      } else if (e.key === 'q') {
        reset(null);
      }
    });
  });

  return (
    <div className='presentation'>
      <CSSTransition in={!inProp} timeout={1000} classNames='current-slide'>
        <div className='slide-content current-slide'>
          {state.currentSlide ? (
            <ReactMarkdown source={state.currentSlide} />
          ) : (
            <div className='empty' />
          )}
        </div>
      </CSSTransition>

      <CSSTransition
        in={inProp}
        timeout={1000}
        classNames='next-slide'
        onEntered={finishSlide}
      >
        <div className='slide-content next-slide'>
          {state.nextSlide ? (
            <ReactMarkdown source={state.nextSlide} />
          ) : (
            <div className='empty' />
          )}
        </div>
      </CSSTransition>
    </div>
  );
}

export default Presentation;
