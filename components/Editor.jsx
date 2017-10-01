'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { sourceChange } from '../actions/source.js';

class Editor extends Component {
  componentDidMount() {
    $('#textarea').keyup(function() {
      while($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css('borderTopWidth')) + parseFloat($(this).css('borderBottomWidth'))) {
        $(this).height($(this).height()+1);
      }
    });
  }
  
  render() {
    return (
      <div className={'editor full-height'}>
        <div className={'wrapper'}>
          <textarea id='markdown' onChange={this.props.sourceChange} value={this.props.source}></textarea>
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