import React, { Dispatch } from "react"

import "../../assets/scss/components/meetup/MeetupItem.scss"
import { MeetupItemProps } from "types/MeetupItemProps"
import { useDispatch, useSelector } from "react-redux"
import { MeetupState } from "types/MeetupState"
import { addToFavorite, removeFromFavorite } from "../../store/actionCreators"

function MeetupItem(props: MeetupItemProps) {
  const itemIsFavorite: boolean = useSelector((state: MeetupState) => state.favorites.includes(props.item?.id))

  const dispatch: Dispatch<any> = useDispatch()

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      dispatch(removeFromFavorite(props.item?.id))
    } else {
      dispatch(addToFavorite(props.item?.id))
    }
  }

  const removeMeetup = (e) => {
    e.preventDefault()

    if (props.onRemoveMeetup) props.onRemoveMeetup(props.item?.id)
  }

  return (
    <li className="item">
      <div className="image">
        <img src={props.item?.image} alt={props.item?.title} />
      </div>
      <div className="content">
        <h3>{props.item?.title}</h3>
        <address>{props.item?.address}</address>
        <p>{props.item?.description}</p>
      </div>
      <div className="actions">
        <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "Remove from Favorites" : "Add To Favorites"}</button>
        <button onClick={removeMeetup}>Remove</button>
      </div>
    </li>
  )
}

export default MeetupItem
