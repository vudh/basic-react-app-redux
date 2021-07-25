import { AddMeetupAction, LoadMeetupsAction } from "./MeetupActions"

export type DispatchAddMeetup = (args: AddMeetupAction) => AddMeetupAction

export type DispatchLoadMeetups = (args: LoadMeetupsAction) => LoadMeetupsAction

export type DispatchMeetupType = DispatchAddMeetup | DispatchLoadMeetups
