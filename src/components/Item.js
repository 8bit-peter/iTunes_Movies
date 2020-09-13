import React from 'react'

const Item = ({ item }) => {
    return (
        <li className="recipeItem">
            <div className="recipeItem__header">
                <img src={item["im:image"][2]["label"]} alt=""/>
                <h3 className="recipeItem__title">{item["title"]["label"]}</h3>
                <p className="summary">{item["summary"]["label"]}</p>
            </div>
        </li>
    )
}

export default Item
