import React from 'react';
import Item from './Item';
import Spinner from './Spinner';

const itemList = ({ items, loading }) => {

    if(loading) {
            return (
               <Spinner />
            )
        } else {
        return (
            <div className="container movieList">
                <div className="d-flex flex-wrap">
                    {items.map( item => (
                        <Item
                          id={item.id.attributes['im:id']}
                          key={item.id.attributes['im:id']}
                          item={item}
                        />
                    ))}
                </div>
            </div>
        )
    }
    
}

export default itemList
