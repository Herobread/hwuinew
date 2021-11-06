import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <div className="void"/>
      <div id="navbar-panel">
        <ul>
          <li>
            <Link to="/week">Week</Link>
          </li>
          <li>
            <Link to="/today">Today</Link>
          </li>
          <li>
            <Link to="/homework">HW</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
