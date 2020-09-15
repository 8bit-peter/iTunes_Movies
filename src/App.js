import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import ItemDetail from "./components/ItemDetail";
import './App.scss';

class App extends Component {
  state = {
    initialItems: [],
    items: [],
    loading: false,

    text: ''
  }

  componentDidMount() {
    this.setState({loading: true})

    fetch('https://itunes.apple.com/us/rss/topmovies/limit=100/json')
    .then(response => response.json())
    .then(data => {
      this.setState({ 
        items: data.feed.entry, 
        initialItems: data.feed.entry, 
        loading: false 
      })
    })
  }

  onChange = (e) => {
    const inputValue = e.target.value

    let items;
    if(!inputValue) {
      items = this.state.initialItems
    } else {
      items = this.state.initialItems.filter(item => item["im:name"]["label"].includes(inputValue) || item["summary"]["label"].includes(inputValue))
    }

    this.setState({
      text: inputValue,
      items: items
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="container-fluid container-fluid--hero">
          <div className="container-xl container-xl--mainContent">
            <Router basename={`${process.env.PUBLIC_URL}/`}>
              <Switch>

                <Route exact path="/">
                  <div>
                    <input className="movieSearch" type="text" name="text" placeholder="Search movie by any word..." value={this.state.text} onChange={this.onChange}/>
                    <ItemList loading={this.state.loading} items={this.state.items}/>
                  </div>
                </Route>

                <Route path="/:id">
                  <ItemDetail items={this.state.initialItems}/>
                </Route>

              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }

}

export default App;