import React, { Component } from 'react'
import { withRouter} from 'react-router-dom';
import { Link } from "react-router-dom"

class ItemDetail extends Component {

  constructor(props) {
    super(props);
    const item = this.findItem(props.items, props.match.params.id)
    this.state = {
      loading: true,
      item,
    }
  }

  componentDidMount() {
    if(!this.state.item) {
      this.setState({ loading: true })
      fetch('https://itunes.apple.com/us/rss/topmovies/limit=100/json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            item: this.findItem(data.feed.entry, this.props.match.params.id),
            loading: false
          })
        })
    } else {
      this.setState({ loading: false })
    }
  }

  findItem = (arr, entityId) => {
    return arr.find(({id}) => id.attributes['im:id'] === entityId);
  }

  render() {
    if(this.state.loading) {
      return null;
    }
    return (
      <div className="movieItemSingle d-flex">
          <div className="movieItemSingle__column movieItemSingle__column--poster">
              <img className="card-img-top movieItemSingle__img" src={this.state.item[ "im:image" ][2][ "label" ].replace('113x170', '213x370')} alt={this.state.item["title"]["label"]}/>
          </div>

          <div className="movieItemSingle__column movieItemSingle__column--txt">
            <h1 className="movieItemSingle__title">{this.state.item[ "im:name" ][ "label" ]}</h1>
            <p className="movieItemSingle__summary">{this.state.item[ "summary" ][ "label" ]}</p>

            <video className="movieItemSingle__trailer" controls src={this.state.item[ "link" ][1][ "attributes" ][ "href" ]} type="video/mp4" />

            <Link to={`/`}>
                <button className="btn btn-secondary btn-block movieItem__comingSoonBtn">BACK</button>
            </Link>
          </div>
      </div>
    )
  }
}

export default withRouter (ItemDetail)