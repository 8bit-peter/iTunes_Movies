import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';

class App extends Component {
  state = {
    items: [],
    loading: false
  }

componentDidMount() {
    fetch('https://itunes.apple.com/us/rss/topmovies/limit=100/json')
    .then(response => response.json())
    .then(data => {
      this.setState({ items: data.feed.entry })
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <ItemList loading={this.state.loading} items={this.state.items}/>
      </div>
    );
  }

}

export default App;
