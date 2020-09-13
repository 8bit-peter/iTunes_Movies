import React from 'react';
import Item from './Item';


const itemList = ({ items, loading }) => {

    if(loading) {
            return (
                <p className="test">nic</p>
            )
        } else {
        return (
            <div className="container recipeList">
                <ul className="recipeList__itemList">
                    {items.map( (item, i) => (
                        <Item key={i} item={items[i]} />
                    ))}
                </ul>
            </div>
        )
    }
    
}

export default itemList
