import React, { Component } from 'react';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strict: false
    };
  }

  setStrict = e => {
    this.setState({
      strict: e.target.checked
    });
  };

  render() {
    return (
      <div className='settings'>
        <h2>Settings</h2>
        <input
          type='checkbox'
          name='strict-mode'
          value='strict'
          onChange={this.setStrict}
        />
        Strict Mode
      </div>
    );
  }
}

export default Settings;
