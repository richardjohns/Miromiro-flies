import React from 'react' 
import Header from './Header'

export default (props) => {
    return (
    <div className="container has-text-centered">
        <Header />
        <hr />
        <div className="wrapper">

        {props.beers.map((beer, i) => {
            return (
            // {console.log('this is beer: ',beer)}           
            <article key={i} className="media">
                <figure className="media-left">
                    <p className="image is-128x128">
                        <a href="/beers/{{beer_id}}">
                            <img src="{{image}}" width="100px"/>
                        </a>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{{ beer_type }} - </strong>
                            <small>{{ beer_brand }}</small>
                            <br/> {{ beer_bio }}
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
                            <img src="{{beer_image}}" width="100px"/>
                        </a>
                    </p>
                </figure>
            </article>
            )
        </div>
    </div>
    }
)}
        <div id="btnmeme" className="has-text-centered">
            <a href="/addbeer">
                <h3 className="button is-large">Add a beer</h3>
            </a>
        </div>
    </div>
)}