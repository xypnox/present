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
        <Presentation slides={partitioner(this.state.file)} />
      </div>
    ) : (
      <Upload setFile={this.setFile} />
    );

    return (
      <div className='App'>
        <h1>Pradarsh</h1>
        {app}
        <hr />
      </div>
    );
  }
}

export default App;
