import React from 'react'

import AddWidget from './AddWidget'
import WidgetList from './WidgetList'
import WidgetDetails from './WidgetDetails'
import ErrorMessage from './ErrorMessage'
import Header from './Header'
import Homehero from './Homehero'
import Statslevel from './Statslevel'
import Leaderboard from './Leaderboard'
import Footer from './Footer'

import {getWidgets, getUsers} from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      widgets: [],
      users: [],
      beers: [],
      activeWidget: null,
      detailsVisible: false,
      addWidgetVisible: false
    }
    getWidgets(this.renderWidgets.bind(this))
    getUsers(this.renderWidgets.bind(this))

  }

  componentDidMount () {
    this.refreshList()
  }

  renderWidgets (err, widgets, users) {
    console.log('This is renderWidgets widgets: ',widgets)
    console.log('This is renderWidgets users: ', users)

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
    console.log('This is showDetails widgets: ',widget)
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
        <Header />
        <Homehero />
        <Statslevel />
        <ErrorMessage error={this.state.error} />
        <Leaderboard users={this.state.widgets} />

        <Footer />
      </div>
    )
  }
}
