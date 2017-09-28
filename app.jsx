'use strict';

import React from 'react';
import { render } from 'react-dom';

import MDPreviewContainer from './components/MDPreviewContainer.jsx';

render(
  <div className={'container'}>
    <MDPreviewContainer />
  </div>,

  document.getElementById('app')
);