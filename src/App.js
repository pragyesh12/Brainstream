import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyCart from './containers/myCart'
import Signup from './containers/signup'
import Landing from './containers/landing'
import Header from './components/header';
import Live from './containers/live';
import Footer from './components/footer/footer';
function App() {
  return (
   <div>
     <Router>
      <div>
       <Header/>
        <Route path="/" exact component={Landing} />
        <Route path="/live" exact component={Live} />
        <Route path='/signup' exact component={Signup} />
        <Route path="/mycart" expact component={MyCart} />
        <Footer/>
      </div>
    </Router>
   </div>
  );
}

export default App;
