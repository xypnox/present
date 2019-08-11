import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { CSSTransition } from 'react-transition-group';

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
    let handleKeyPress = e => {
      if (e.key === 'Enter' || e.key === ' ') {
        setInProp(true);
      } else if (e.key === 'q') {
        document.body.removeEventListener('keypress', handleKeyPress);
        document.exitFullscreen();
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
              <ReactMarkdown source={state.currentSlide} />
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
        onEntered={finishSlide}
      >
        <div className='slide-content next-slide'>
          <div className='slide-inner'>
            {state.nextSlide ? (
              <ReactMarkdown source={state.nextSlide} />
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
