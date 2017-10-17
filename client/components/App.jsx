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
import Beersandmeme from './Beersandmeme'
// import Beers from './Beers'

import {getWidgets, getUsers, getBeers} from '../api'

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
    getBeers(this.renderWidgets.bind(this))


  }

  componentDidMount () {
    this.refreshList()
  }

  renderWidgets (err, widgets, users, beers) {
    // console.log('This is renderWidgets widgets: ',widgets)
    // console.log('This is renderWidgets users: ', users)
    this.setState({
      error: err,
      widgets: widgets || [],
      users: users || [],
      beers: beers || []
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
        <Beersandmeme />
        {/* <Beers beers={this.state.beers}/> */}
        <Footer />
      </div>
    )
  }
}
