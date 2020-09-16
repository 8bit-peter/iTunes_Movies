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
    const inputValue = e.target.value.toLowerCase();

    let items;
    if(!inputValue) {
      items = this.state.initialItems
    } else {
      items = this.state.initialItems.filter(item => {
        const searchedValue = inputValue.toLowerCase();
        const name = item["im:name"].label.toLowerCase();
        const summary = item.summary.label.toLowerCase();
        const category = item.category.attributes.term.toLowerCase();
        return name.includes(searchedValue) || summary.includes(searchedValue) || category.includes(searchedValue)
      })
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
                    <input className="movieSearch" type="text" name="text" placeholder="Search movie by any word or category..." value={this.state.text} onChange={this.onChange}/>
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