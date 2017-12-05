import React, { Component } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <div>
        Home
        <Link to='/about'>ir a about</Link>
      </div>
    )
  }
}

export default Home