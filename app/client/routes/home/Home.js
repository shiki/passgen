import React from 'react'
import Generator from './components/Generator'
import { Link } from 'react-router'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="about">About</Link>
        <Generator />
      </div>
    )
  }
}

export default Home