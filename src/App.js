import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';

class App extends Component {
  state = {
    items: [],
    loading: false
  }

componentDidMount() {
  this.setState({loading: true})

  fetch('https://itunes.apple.com/us/rss/topmovies/limit=100/json')
  .then(response => response.json())
  .then(data => {
    this.setState({ items: data.feed.entry, loading: false })
  })
}

  render() {
    return (
      <div className="App">
        <div className="container-fluid container-fluid--hero">
          <div className="container-xl container-xl--mainContent">
            <Navbar/>
            <ItemList loading={this.state.loading} items={this.state.items}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
