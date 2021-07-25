import MeetupList from "../components/meetup/MeetupList"
import React from "react"
import { IMeetup } from "types/IMeetup"
import { shallowEqual, useSelector } from "react-redux"
import { MeetupState } from "types/MeetupState"

function FavoritesPage() {
  const meetups: readonly IMeetup[] = useSelector((state: MeetupState) => state.meetups.filter((x) => state.favorites.includes(x.id)), shallowEqual)

  let content

  if (meetups.length === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>
  } else {
    content = <MeetupList meetups={meetups} />
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default FavoritesPage
