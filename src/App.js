import React, { Component } from 'react';
import Upload from './components/Upload';
import partitioner from './helpers/partitioner';

import './styles/App.scss';
import Presentation from './components/Presentation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
  }

  setFile = file => {
    let result = new Promise((resolve, reject) => {
      this.setState({
        file: file
      });
      resolve();
    });
    return result;
  };

  render() {
    console.log(this.state);
    let app = this.state.file ? (
      <div className='doc'>
        <Presentation
          slides={partitioner(this.state.file)}
          reset={this.setFile}
        />
      </div>
    ) : (
      <div className='start'>
        <h1>Pradarsh</h1>
        <Upload setFile={this.setFile} />
        <hr />
      </div>
    );

    return <div className='App'>{app}</div>;
  }
}

export default App;
