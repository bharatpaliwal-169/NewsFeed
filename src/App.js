import React, { Component } from 'react';
import News from './components/Feeds';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <News />
      </React.Fragment>
    );
  }
}

// const url = "https://newsapi.org/docs/endpoints/top-headlines"; 

export default App;