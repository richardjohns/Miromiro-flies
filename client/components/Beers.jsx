import React from 'react'
import { Route, Link } from 'react-router-dom'
import { getWidgets, getUsers, getBeers } from '../api'

import Header from './Header'
export default (props) => {
    return (
       
        <div className="container has-text-centered">
            {console.log('This is beers props: ', props)}
            <Header />
            <hr />
            <div className="wrapper">
            
            {props.beers.map((beer, i) => {
                {console.log('this is beer: ', beer)} 
                return (        
                    <article key={i} className="media">
                        <figure className="media-left">
                            <p className="image is-128x128">
                                <Link to={`/beer/${beer.id}`} className="cart-link"><img src={beer.image} width="100px" /></Link>
                            </p>
                        </figure>

                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{beer.beer_type} - </strong>
                                    <small>{beer.beer_brand}</small>
                                    <br /> {beer.beer_bio}
                                </p>
                            </div>
                            <nav className="level is-mobile">
                                <div className="level-left">
                                    <a className="level-item">
                                        <span className="icon is-small">
                                            <i className="fa fa-retweet"></i>
                                        </span>
                                    </a>
                                    <a className="level-item">
                                        <span className="icon is-small">
                                            <i className="fa fa-thumbs-up"></i>
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <figure className="media-right">
                            <p className="image is-128x128">
                                <a href="/beers/{{beer_id}}">
                                    <img src={beer.beer_image} width="100px" />
                                </a>
                            </p>
                        </figure>







                    </article>
                )}
            )}








            </div>
        </div>








    )
}