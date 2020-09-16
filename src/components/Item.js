import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item, id }) => {
    return (
        <div className="movieItem card">
            <div className="movieItem__poster">
                { item["im:image"][2]["label"] ? (
                    <img className="movieItem__img--poster card-img-top movieItem__img" loading="lazy" src={item["im:image"][2]["label"]} alt={item["title"]["label"]}/>
                ) : (
                    <img className="movieItem__img--poster card-img-top movieItem__img" loading="lazy" src="https://via.placeholder.com/113x170" alt="Placeholder"/>
                )}

                <p className="movieItem__poster__category">
                    {item["category"]["attributes"]["term"]}
                </p>
            </div>

            <div className="movieItem__content card-body d-flex flex-column align-content-center justify-content-between">
                <h3 className="movieItem__content__title card-title">{item["title"]["label"]}</h3>

                <Link to={`/${id}`}>
                    <button className="btn btn-secondary btn-block movieItem__comingSoonBtn">More info</button>
                </Link>
            </div>
        </div>
    )
}

export default Item
