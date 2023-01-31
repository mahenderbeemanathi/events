// Write your code here
import './index.css'

const EventItem = props => {
  const {itemDetails, getStatus} = props

  const {id, imageUrl, name, location} = itemDetails

  const onClickEvent = () => {
    getStatus(id)
  }

  return (
    <li className="event">
      <button className="button" type="button" onClick={onClickEvent}>
        <img className="event-img" src={imageUrl} alt="event" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
