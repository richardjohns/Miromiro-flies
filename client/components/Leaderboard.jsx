import React from 'react' 

const Leaderboard =(props) => (
    // return (
<div>
    <div className="">
        <h2>Hall of Fame...</h2>
        <br/>

    </div>

    {/* {console.log('This is Leaderboard props: ', props)} */}
    {props.users.map((user, i) => {
        return (
    // {console.log('this is user: ',user)}
    <div key={i}>
        <div>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-96x96">
                        <a href="/users/${id}">
                            <img src={user.usrimage} /> </a>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{user.name}</strong>
                            <small>  "{user.alias}"</small>
                            <br/> Superpower: {user.superpower}
                            <br/> {user.backStory}
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
                                    <a href={`https://github.com/${user.github}`}>
                                        <i className="fa fa-github"></i>
                                    </a>
                                </span> {user.github}
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
        )
         } 
        ) 
    }
</div>
        ) 
    

export default Leaderboard