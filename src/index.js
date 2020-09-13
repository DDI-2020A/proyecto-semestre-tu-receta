import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './componentes/App';
import * as serviceWorker from './serviceWorker';
//import {FirebaseAppProvider} from 'reactfire'
//import config from './firebase/index'

ReactDOM.render(
//<FirebaseAppProvider firebaseConfig ={config}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
//</FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
