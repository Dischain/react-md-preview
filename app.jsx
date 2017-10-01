'use strict';

import React from 'react';
import { render } from 'react-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MDPreviewContainer from './components/MDPreviewContainer.jsx';

render(
  <div className={'full-height'}>
    <Navbar />
    <MDPreviewContainer />
    <Footer />
  </div>,

  document.getElementById('app')
);