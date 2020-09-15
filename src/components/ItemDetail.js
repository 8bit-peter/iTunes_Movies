import React, { Fragment } from 'react'
import { withRouter} from 'react-router-dom'

const ItemDetail = ({ items, match}) => {

    // let item = this.props.items.find(items => items.id === this.props.match.params.id)
    // let item = items[0]
    console.log(items[0])

    return (
        <Fragment>
            {/* <h1>{item["im:name"]["label"]}</h1> */}
            <p>Title</p>
            <p>summary</p>
        </Fragment>
    )
}

export default withRouter (ItemDetail)