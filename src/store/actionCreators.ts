import { DispatchAddMeetup } from "types/DispatchType"
import { IMeetup } from "types/IMeetup"
import { AddMeetupAction } from "types/MeetupActions"
import * as actionTypes from "./actionTypes"

export function startLoading() {
  return {
    type: actionTypes.START_LOADING,
  }
}

export function stopLoading() {
  return {
    type: actionTypes.STOP_LOADING,
  }
}

export function addToFavorite(meetupId: string) {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    meetupId,
  }
}

export function removeFromFavorite(meetupId: string) {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITES,
    meetupId,
  }
}

export function addMeetup(meetup: IMeetup) {
  const action: AddMeetupAction = {
    type: actionTypes.ADD_MEETUP,
    meetup,
  }

  return function (dispatch: DispatchAddMeetup) {
    return fetch("https://basic-react-app-9133a-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => dispatch(action))
  }
}

export function loadMeetups() {
  return function (dispatch) {
    return fetch("https://basic-react-app-9133a-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const meetups = []

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          }

          meetups.push(meetup)
        }

        return meetups
      })
      .then((meetups) => {
        dispatch({
          type: actionTypes.LOAD_MEETUPS,
          meetups,
        })
        dispatch(stopLoading())
      })
  }
}
