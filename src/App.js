import React, { Component } from 'react';
import Upload from './components/Upload';
import partitioner from './helpers/partitioner';

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
        <h1>Present</h1>
        <Upload setFile={this.setFile} />
        <hr />
        <Settings />
      </div>
    );

    return <div className='App'>{app}</div>;
  }
}

export default App;
