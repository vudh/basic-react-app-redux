import { MeetupAction } from "types/MeetupActions"
import { MeetupState } from "types/MeetupState"
import * as actionTypes from "./actionTypes"

const initialState: MeetupState = {
  meetups: [],
  isLoading: false,
  favorites: [],
  redirectTo: "",
}

const reducer = (state: MeetupState = initialState, action: MeetupAction): MeetupState => {
  switch (action.type) {
    case actionTypes.ADD_MEETUP:
      return {
        ...state,
        redirectTo: "/",
      }
    case actionTypes.LOAD_MEETUPS:
      return {
        ...state,
        meetups: action.meetups,
        redirectTo: "",
      }
    case actionTypes.START_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      }

    case actionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.concat(action.meetupId),
      }
    case actionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((x) => x !== action.meetupId),
      }
  }
  return state
}

export default reducer
