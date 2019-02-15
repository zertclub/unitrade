
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<AppRouter/>, document.getElementById('app'));
