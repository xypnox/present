import React, { Component } from 'react';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(event) {
    let file = event.target.files[0];

    if (file) {
      let read = new FileReader();

      read.readAsText(file);

      read.onloadend = () => {
        let result = read.result;
        this.props.setFile(result);
      };
    }

    if (file) {
      let data = new FormData();
      data.append('file', file);
    }
  }

  render() {
    return (
      <span>
        <input type='file' name='myFile' onChange={this.uploadFile} />
      </span>
    );
  }
}

export default Upload;
