import React, { useEffect, useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import { loadMeetups, startLoading } from "../store/actionCreators"

import MeetupList from "../components/meetup/MeetupList"
import { IMeetup } from "types/IMeetup"
import { MeetupState } from "types/MeetupState"

function AllMeetupsPage() {
  const meetups: readonly IMeetup[] = useSelector((state: MeetupState) => state.meetups, shallowEqual)
  const isLoading = useSelector((state: MeetupState) => state.isLoading)
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    dispatch(startLoading())
    dispatch(loadMeetups())
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  )
}

export default AllMeetupsPage
