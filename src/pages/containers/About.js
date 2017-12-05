import React, { Component } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <div>
        About
        <Link to='/'>ir a home</Link>
      </div>
    )
  }
}

export default Home