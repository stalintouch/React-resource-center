import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <AppBar
            title='title'
            iconClassNameRight='muidocs-icon-navigation-expand-more'
            onLeftIconButtonTouchTap={() =>
              this.setState({ open: !this.state.open })}
          />
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={open => this.setState({ open })}
          >
            <Link to='/'>
              <MenuItem onClick={this.handleClose}>Home</MenuItem>
            </Link>
          </Drawer>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
