import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Beers from './Beers'
import ErrorMessage from './ErrorMessage'
import Header from './Header'
import Homehero from './Homehero'
import Statslevel from './Statslevel'
import Leaderboard from './Leaderboard'
import Footer from './Footer'
import Beersandmeme from './Beersandmeme'

import { getBeers, getUsers } from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      users: [],
      beers: [],
      activeWidget: null,
      detailsVisible: false,
      addWidgetVisible: false
    }
    this.fetchBeerData = this.fetchBeerData.bind(this)
    this.fetchUserData = this.fetchUserData.bind(this)
  }

  componentWillMount () {
    // this.refreshList()
    this.fetchUserData()
    this.fetchBeerData()
  }

  // works with data to setState.
  // getUsers is returning a promise, hence can use .then in fetchUserData
  fetchUserData () {
    return getUsers()
    .then(users => {
      this.setState({ users: users })
    })
    .catch(err => {
      this.setState({ err: err })
    })
  }

  fetchBeerData() {
    return getBeers()
      .then(beers => {
        this.setState({ beers: beers })
      })
      .catch(err => {
        this.setState({ err: err })
      })
  }
  render () {
    return (
      <div>
        <Route exact path="/" component={() => <Header />} />
        <Route exact path="/" component={() => <Homehero />} />
        <Route exact path="/" component={() => <Statslevel />} />
        <ErrorMessage error={this.state.error} />
        <Route exact path="/" component={() => <Leaderboard /> } />
        <Route exact path="/" component={() => <Beersandmeme /> } />
        <Route exact path='/beers' render={() => {
          return <Beers />
        }} /> 
        <Footer />
      </div>
    )
  }
}

