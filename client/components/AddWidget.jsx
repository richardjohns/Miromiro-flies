import React from 'react'

import {appendWidget} from '../api'

export default class AddWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      mfg: '',
      inStock: ''
    }
  }

  fieldChanged (e) {
    e.preventDefault()
    this.setState({
      // watches field changes, sets state.
      [e.target.name]: e.target.value
    })
  }

  addWidget (e) {
    // 1. addWidget is an event handler - monitoring browser.
    e.preventDefault() // event handler
    const widget = this.state
    // 2. calls appendWidget in api.js
    appendWidget(widget, this.props.finishAdd)
  }

  render () {
    return (
      <div className='add-widget'>
        <form>
          <p><input placeholder='Name' name='name'
            onChange={e => this.fieldChanged(e)}
            value={this.state.name}
            /></p>
          <p><input placeholder='Price' name='price'
            onChange={e => this.fieldChanged(e)}
            value={this.state.price}
            /></p>
          <p><input placeholder='Manufacturer' name='mfg'
            onChange={e => this.fieldChanged(e)}
            value={this.state.mfg}
            /></p>
          <p><input placeholder='In stock' name='inStock'
            onChange={e => this.fieldChanged(e)}
            value={this.state.inStock}
            /></p>
          <button onClick={e => this.addWidget(e)}>Add widget</button> {' '}
          <a href='#' onClick={this.props.finishAdd}
          >Cancel</a>
          // 8. page refreshes via finishAdd once positive 201 message received.
          // 1. button calls addWidget with 
        </form>
      </div>
    )
  }
}
