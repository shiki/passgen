import React from 'react'
import Generator from './components/Generator'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Home extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton label="Default" />
          <h1>Home</h1>
          <Link to="about">About</Link>
          <Generator />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Home
