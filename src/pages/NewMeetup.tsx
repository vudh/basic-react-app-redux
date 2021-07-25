import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import { addMeetup } from "../store/actionCreators"
import NewMeetupForm from "../components/meetup/NewMeetupForm"
import { MeetupState } from "types/MeetupState"
import { Redirect } from "react-router-dom"

function NewMeetupPage() {
  const redirectTo = useSelector((state: MeetupState) => state.redirectTo)

  const dispatch: Dispatch<any> = useDispatch()

  const addMeetupHandler = (meetupData) => {
    /*fetch("https://basic-react-app-9133a-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/")
    })*/
    dispatch(addMeetup(meetupData))
  }

  if (redirectTo) {
    return <Redirect to={redirectTo} />
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage
