import React from "react"
import { Link } from "react-router-dom"

import "../../assets/scss/components/MainNavigation.scss"
import { MeetupState } from "types/MeetupState"
import { useSelector } from "react-redux"

function MainNavigation() {
  const favorites: number = useSelector((state: MeetupState) => state.favorites.length)

  return (
    <header className="header">
      <div className="logo">React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className="badge">{favorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
