import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'; 
//import Navigation from './components/Navbar'; 
import Routes from './classes/Routes'; 

ReactDOM.render(

  <Router>
    <div className="App">
      {/* <Navigation /> */}
      <Routes />
    </div>
  </Router>,
  document.getElementById('root')

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
