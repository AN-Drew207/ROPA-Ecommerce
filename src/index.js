import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './SASS/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { HashRouter} from 'react-router-dom';


ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('root')
);

