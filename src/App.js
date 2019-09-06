import React, { Component } from 'react';
import Upload from './components/Upload';
import partitioner from './partition/partitioner';

import './styles/App.scss';
import Presentation from './components/Presentation';
import Settings from './components/settings';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      slides: null
    };
  }

  setFile = file => {
    let result = new Promise((resolve, reject) => {
      this.setState({
        file: file,
        slides: file && partitioner(file)
      });

      resolve();
    });
    return result;
  };

  render() {
    let app = this.state.file ? (
      <div className='doc'>
        <Presentation slides={this.state.slides} reset={this.setFile} />
      </div>
    ) : (
      <div className='start'>
        <div className='flex'>
          <img src='icon.svg' id='icon' alt='' />
          <div className='info'>
            <h1>Present</h1>
            <p>
              Present Markdown files easily and effectively. With ❤, by{' '}
              <a href='https://www.xypnox.com'>xypnox</a>
            </p>
          </div>
        </div>
        <Upload setFile={this.setFile} />
        <hr />
        <Settings />
      </div>
    );

    return <div className='App'>{app}</div>;
  }
}

export default App;
