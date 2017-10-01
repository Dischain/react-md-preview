'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Markdown  from 'react-remarkable';

class Preview extends Component {
    render() {
      return (
        <div className={'preview'}>
          <Markdown source={this.props.source} />
        </div>
      );
    }
}

const mapStateToProps = (state) => { 
  return { source: state.source };
};

export default connect(mapStateToProps)(Preview);