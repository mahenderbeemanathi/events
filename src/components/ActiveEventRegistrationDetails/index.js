// Write your code here
import './index.css'

const statusList = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEvent} = props
  const {registrationStatus} = activeEvent
  console.log(activeEvent)
  switch (registrationStatus) {
    case statusList.registered:
      return (
        <div className="status-container">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
          />
          <h1 className="head">You have already registered for the event</h1>
        </div>
      )
    case statusList.yetToRegister:
      return (
        <div className="status-container">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
          />
          <p className="desc">
            A live performance brings so much to your relationship with dance .
            Seeing dance live can often make you fall totally in love with this
            beatiful art form.
          </p>
          <button type="button">Register Here</button>
        </div>
      )
    case statusList.closed:
      return (
        <div className="status-container">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
          />
          <h1 className="head">Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen the registrations soon!</p>
        </div>
      )

    default:
      return null
  }
}
export default ActiveEventRegistrationDetails
