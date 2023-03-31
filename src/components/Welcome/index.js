import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribeIn: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribeIn: !prevState.isSubscribeIn}))
  }

  getButtonText = () => {
    const {isSubscribeIn} = this.state

    return isSubscribeIn ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="title">Thank you! Happy Learning</p>
        <button
          className="subscribe-btn"
          type="button"
          onClick={this.onSubscribe}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
