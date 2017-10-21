import React from 'react'
import WidgetListItem from './WidgetListItem'

export default (props) => {
  return (
    <div className='widget-list'>
      {console.log('This is WidgetList props: ', props)}

      {/* <h2>List</h2>
      {props.widgets.map((widget) => {
        return <WidgetListItem
          key={widget.id}
          widget={widget}
          hideDetails={props.hideDetails}
          showDetails={props.showDetails} /> */}

      {props.users.map((user, i) => {

        <div key={i} className="container">
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
                    <small>"${user.alias}"</small>
                    <br /> Superpower: {user.superpower}
                    <br /> {user.backStory}
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


      })}
    </div>
  )
}
