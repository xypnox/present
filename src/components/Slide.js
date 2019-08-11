import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import partitioner from '../helpers/partitioner';

class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: this.props.markdown,
      slides: []
    };
  }

  componentDidMount() {
    let slides = partitioner(this.props.markdown);
    this.setState({
      slides: slides
    });
  }

  render() {
    // console.log('Slides State: ', this.state);
    return (
      <div className='slides'>
        {this.state.slides.map(slide => {
          return (
            <div className='slide'>
              <ReactMarkdown source={slide} />
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Slides;
