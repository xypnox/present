import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {
  constructor(props) {
    super(props);

    // The state of the settings component is similar
    // to the settings stored in redux state
    // It's object props are defined in settingsReducer.js as initial state
    this.state = this.props.settings;
  }

  setStrict = e => {
    this.setState({
      strict: e.target.checked
    });

    this.props.setSettings(this.state);
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

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSettings: value =>
      dispatch({
        type: 'SETTINGS',
        value: value
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
