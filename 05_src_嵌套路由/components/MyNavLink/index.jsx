import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './index.css'

export default class MyNavLink extends Component {
    static propTypes = {
        to: PropTypes.string.isRequired,
        children: PropTypes.string.isRequired
    }

    render() {
        return (
            <NavLink activeClassName="demo" className="list-group-item" {...this.props} />
        )
    }
}
