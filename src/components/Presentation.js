import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
import { CSSTransition } from 'react-transition-group';
import Markdown from './markdown';

function Presentation({ slides, reset }) {
  const [inProp, setInProp] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  let [state, setState] = useState({
    slides: slides,
    currentSlide: slides.length > 0 ? slides[0] : null,
    currentSlideIndex: slides.length > 0 ? 0 : NaN,
    nextSlide: slides.length > 1 ? slides[1] : null,
    nextSlideIndex: slides.length > 1 ? 1 : NaN
  });

  let switchSlides = (currentSlideIndex, nextSlideIndex) => {
    let slides = state.slides;
    setState({
      slides: slides,
      currentSlide: slides[currentSlideIndex],
      currentSlideIndex: currentSlideIndex,
      nextSlide: slides[nextSlideIndex],
      nextSlideIndex: nextSlideIndex
    });
  };

  let changeNextSlide = e => {
    let currentSlideIndex = (state.currentSlideIndex + 1) % state.slides.length,
      nextSlideIndex = (state.nextSlideIndex + 1) % state.slides.length;

    if (nextSlideIndex + 1 <= slides.length) {
      switchSlides(currentSlideIndex, nextSlideIndex);
      setInProp(false);
    }
  };

  let changePrevSlide = e => {
    let currentSlideIndex =
        (state.slides.length + state.currentSlideIndex - 1) %
        state.slides.length,
      nextSlideIndex =
        (state.slides.length + state.nextSlideIndex - 1) % state.slides.length;

    if (currentSlideIndex + 1 <= slides.length) {
      switchSlides(currentSlideIndex, nextSlideIndex);
      // setInProp(true);
    }
  };

  useEffect(() => {
    let handleKeyPress = e => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'n') {
        setInProp(true);
      } else if (e.key === 'p') {
        setInProp(false);
        changePrevSlide();
      } else if (e.key === 'q') {
        if (fullScreen) {
          document.exitFullscreen();
        }
        document.body.removeEventListener('keypress', handleKeyPress);
        reset(null);
      } else if (e.key === 'f') {
        if (fullScreen) {
          document.exitFullscreen();
        } else {
          document.body.requestFullscreen();
        }
        setFullScreen(!fullScreen);
      }
    };

    document.body.addEventListener('keypress', handleKeyPress);
  });

  return (
    <div className='presentation'>
      <CSSTransition in={!inProp} timeout={1000} classNames='current-slide'>
        <div className='slide-content current-slide'>
          <div className='slide-inner'>
            {state.currentSlide ? (
              <Markdown source={state.currentSlide} />
            ) : (
              <div className='empty' />
            )}
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={inProp}
        timeout={1000}
        classNames='next-slide'
        onEntered={changeNextSlide}
      >
        <div className='slide-content next-slide'>
          <div className='slide-inner'>
            {state.nextSlide ? (
              <Markdown source={state.nextSlide} />
            ) : (
              <div className='empty' />
            )}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Presentation;
