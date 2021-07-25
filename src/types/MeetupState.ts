import { IMeetup } from "./IMeetup"

export type MeetupState = {
  meetups: IMeetup[]
  isLoading: boolean
  favorites: string[]
  redirectTo: string
}
