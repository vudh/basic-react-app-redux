import { IMeetup } from "./IMeetup"

export type AddMeetupAction = {
  type: string
  meetup: IMeetup
}

export type LoadMeetupsAction = {
  type: string
  meetups: IMeetup[]
}

export type FavoriteAction = {
  type: string
  meetupId: string
}

export type MeetupAction = AddMeetupAction | LoadMeetupsAction | FavoriteAction
