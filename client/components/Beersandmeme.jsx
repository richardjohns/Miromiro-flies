import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

const Beersandmeme = (props) => {
    return (
    <div>
        <div id="selection" className="has-text-centered">
            <Link to='/beers'>
                <h3 className="button is-large">What's in the fridge?</h3>
            </Link>
        </div>

        <div id="btnmeme" className="has-text-centered">
            <Link to='/beers'>
                <h3 className="button is-large">Sure would like a cold meme right about now...</h3>
            </Link>
        </div>
    </div>
    )
}

const mapStateToProps = ({ users, beers }) => {
    return {
        users,
        beers
    };
};

export default connect(mapStateToProps)(Beersandmeme)
