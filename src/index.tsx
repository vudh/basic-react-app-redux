import * as React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import { applyMiddleware, createStore, Store } from "redux"
import { MeetupState } from "types/MeetupState"
import thunk from "redux-thunk"
import reducer from "./store/reducer"
import { Provider } from "react-redux"
import { MeetupAction } from "types/MeetupActions"
import { DispatchMeetupType } from "types/DispatchType"

const store: Store<MeetupState, MeetupAction> & {
  dispatch: DispatchMeetupType
} = createStore(reducer, applyMiddleware(thunk))

const rootEl = document.getElementById("root")

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootEl,
)
