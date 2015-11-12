import React from 'react';
import ReactDOM from 'react-dom';
import routes from './App';
import { Router } from 'react-router';


ReactDOM.render(<Router routes={routes} />, document.getElementById('root'));
