'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Editor from './Editor.jsx';
import Preview from './Preview.jsx';

import configureStore from '../store/configureStore.js';

const store = configureStore({ source: '' });

export default class MDPreviewContainer extends Component {
  render() {
    return (
      <div className={'row'}>
        <Provider store={store}>
          <div>
          <Editor />
          <Preview />
          </div>
        </Provider>
      </div>
    );
  }
}