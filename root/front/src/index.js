import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import NavBarLimadopta from './Components/NavBarLimadopta'
import Home from './Components/Home'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Adopt from './Components/Adopt';
import AdoptNew from './Components/AdoptNew';

ReactDOM.render(
  <React.StrictMode>
     <NavBarLimadopta />
    <Router>
      <Switch>
      <Route path="/adopt/new">
          <AdoptNew/>
        </Route>
        <Route path="/adopt">
          <Adopt/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    
  </React.StrictMode>,
  
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
