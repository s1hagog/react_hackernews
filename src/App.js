import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Define list of items


const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },{
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, ANdrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 0,
  }
]





class App extends Component {
  render(){
    const helloWorld = 'Hello Sooka shlyushka';
    const lorem = 'Dolor elit Lorem culpa reprehenderit ad enim cillum deserunt ad.';

    const person = {firstName: 'alex', lastName: 'moshak'};
    return(
      <div className="App">
        <h2>{helloWorld}</h2>
        <h3>{lorem}</h3>
        <span>The author is {person.firstName} and {person.lastName}</span>
      </div>
    )
  }
}

export default App;
