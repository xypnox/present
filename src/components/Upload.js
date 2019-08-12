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
        <div class='upload-btn-wrapper'>
          <button class='btn'>Upload a file</button>
          <input type='file' name='myfile' onChange={this.uploadFile} />
        </div>
      </span>
    );
  }
}

export default Upload;
