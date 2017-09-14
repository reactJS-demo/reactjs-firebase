import React, { Component } from 'react';
import firebase from 'firebase';

import MessageList from './components/MessageList';
import Header from './components/Header';
import MessageBox from './components/MessageBox';

class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      databaseURL: "https://reactjs-message.firebaseio.com"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase App" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6"> 
            <MessageList db={firebase}/> 
          </div>
        </div>

        <div className = "columns">
          <div className="column is-3"> </div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
