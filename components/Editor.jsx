'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sourceChange } from '../actions/source.js';

class Editor extends Component {
  render() {
    return (
      <div className={'editor'}>
        <div className={'content'}>
          <textarea className={'form-control'} onChange={this.props.sourceChange} value={this.props.source}></textarea>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return { source: state.source };
};

const mapDispatchToProps = (dispatch) => { 
  return { 
    sourceChange: (event) => dispatch(sourceChange(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);