'use strict';

import React from 'react';
import { render } from 'react-dom';

import Navbar from './components/Navbar.jsx';
import MDPreviewContainer from './components/MDPreviewContainer.jsx';

render(
  <div className={'container full-height'}>
    <Navbar />
    <MDPreviewContainer />
    <footer className={'footer'}>
      <div className={'container'}>
        <span className={'text-muted'}>dischain, 2017</span>
      </div>
    </footer>
  </div>,

  document.getElementById('app')
);