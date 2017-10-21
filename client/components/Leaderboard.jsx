import React from 'react' 
import {connect} from 'react-redux'
const Leaderboard =(props) => (
    // return (
<div>
    {console.log('This is leaderboard props: ', props)}
    <div className="">
        <h2>Hall of Fame...</h2>
        <br/>
    </div>
    {props.users.map((user, i) => {
        return (
    <div key={i}>
        {console.log('this is leaderboard map user: ', user)}
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
    
const mapStateToProps = ({ users, beers }) => {
    return {
        users,
        beers
    };
};

export default connect(mapStateToProps)(Leaderboard)