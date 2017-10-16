import React from 'react' 
export default (props) => { 
    return (
<div>
    <div className="container">
        <h2>Hall of Fame...</h2>
        <br/>
    </div>

    {props.users.map(user => {

    <div className="container">
        <div>

            <article className="media">
                <figure className="media-left">
                    <p className="image is-96x96">
                        <a href="/users/${id}">
                            <img src={usrimage} /> </a>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{name}</strong>
                            <small>"${alias}"</small>
                            <br/> Superpower: {superpower}
                            <br/> {backStory}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item">
                                <span className="icon is-small">
                                    <i className="fa fa-reply"></i>
                                </span>
                            </a>
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
                            <small>
                                <span className="icon">
                                    <a href="https://github.com/${github}">
                                        <i className="fa fa-github"></i>
                                    </a>
                                </span> {github}
                            </small>
                        </div>
                    </nav>
                </div>
                <div className="media-right">
                    <button className="delete"></button>
                </div>
            </article>
        </div>
        <hr /> 
    </div>
            } 
        ) 
    }
</div>
        ) 
    }