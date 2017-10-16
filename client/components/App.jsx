import React from 'react'

import AddWidget from './AddWidget'
import WidgetList from './WidgetList'
import WidgetDetails from './WidgetDetails'
import ErrorMessage from './ErrorMessage'

import {getWidgets} from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      widgets: [],
      users: [],
      beers: [],
      // activeWidget: null,
      // detailsVisible: false,
      // addWidgetVisible: false
    }
    getWidgets(this.renderWidgets.bind(this))
  }

  componentDidMount () {
    this.refreshList()
  }

  renderWidgets (err, widgets, users) {
    this.setState({
      error: err,
      widgets: widgets || [],
      users: users || []
    })
  }

  refreshList (err) {
    this.setState({
      error: err,
      addWidgetVisible: false
    })
  }

  showAddWidget () {
    this.setState({
      addWidgetVisible: true
    })
  }

  showDetails (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: true
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />

        <div>
          <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img class="headerimg" src="/images/2beers.png"></a>
                <div class="navbar-start">
                  <h1 class="title headertitle">Hold My Beer...</h1>
                </div>

                <button class="button navbar-burger">
                  <span><a href="/">Home</a></span>
                  <span>Users</span>
                  <span>Beers</span>
                  <span>Nuisance</span>
                </button>
            </div>
        </nav>  
        </div>

{/* 
        <WidgetList
          showDetails={this.showDetails.bind(this)}
          widgets={this.state.widgets} /> */}

        <p><a id='show-widget-link' href='#' onClick={(e) => this.showAddWidget(e)}>Add widget</a></p>

        {this.state.addWidgetVisible && <AddWidget
          finishAdd={this.refreshList.bind(this)} />}

        {this.state.detailsVisible && <WidgetDetails
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails.bind(this)}
          widget={this.state.activeWidget} />}

      </div>
    )
  }
}
