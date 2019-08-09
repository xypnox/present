import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import Upload from './components/Upload';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
  }

  setFile = file => {
    this.setState({
      file: file
    });
  };

  readFile = () => {
    let file = this.state.file;
    if (file) {
      let read = new FileReader();

      read.readAsText(file);

      read.onloadend = () => {
        let result = read.result;
        console.log(result);
        this.setState({
          markdown: result
        });
      };
    }
  };

  render() {
    return (
      <div className='App'>
        <h1>Pradarsh</h1>
        <Upload setFile={this.setFile} />
        <ReactMarkdown source={this.state.markdown} />

        <hr />

        {this.readFile()}
      </div>
    );
  }
}

export default App;
