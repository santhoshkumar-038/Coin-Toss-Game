// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, tossImage: HEADS_IMG_URL}

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({tossImage: HEADS_IMG_URL})
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState({tossImage: TAILS_IMG_URL})
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {heads, tails, tossImage} = this.state
    const totalCount = heads + tails
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="app-heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="image-sizing" />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="results-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
