import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

//components
import FeelingComponent from '../FeelingComponent/FeelingComponent'; 
import UnderstandingComponent from '../UnderstandingComponent/UnderstandingComponent';
import SupportComponent from '../SupportComponent/SupportComponent';
import CommentComponent from '../CommentComponent/CommentComponent';
import ReviewComponent from '../ReviewComponent/ReviewComponent'


function App() {
//dispatch
const dispatch = useDispatch();

useEffect(() => {
}, []) //load page once




  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route exact path="/">
        <FeelingComponent/>
      </Route>
      <Route path="/understanding">
        <UnderstandingComponent/>
      </Route>
      <Route path="/support">
        <SupportComponent/>
      </Route>
      <Route path ="/comments">
        <CommentComponent/>
      </Route>
      <Route path="/review">
        <ReviewComponent/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
