import * as React from 'react'
import ReactDOM from 'react-dom'

import Logo from '../assets/button/logo.svg'

import currencyETH from '../assets/button/currency-eth.svg'
import currencyBNB from '../assets/button/currency-bnb.svg'
import currencyMATIC from '../assets/button/currency-matic.svg'

import './mint_button.scss'

// please don't remove `#via-widget` - it is in use
const widgetDivs = document.querySelectorAll('#via-widget, .via-widget')

widgetDivs.forEach(div => {
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    div
  )
})

export default function App({ title, amount, unit, set }) {
  const urlParams = new URLSearchParams(window.location.search)
  const ref = urlParams.get('ref')
  const refUrlAddition = ref ? `?ref=${ref}` : ''

  const go = 'https://pay.via.exchange/nft/' + 'ace4c308-e20d-4a70-82eb-91db2fea7a89' + refUrlAddition

  return (
    <div id="via-widget-inner">
      <a id="via-mint-button" href={go} target="_blank" rel="noopener noreferrer">
        <span>Mint now</span>
        <span id="via-currencies">
          <img src={currencyETH} alt="ETH" />
          <img src={currencyBNB} alt="BNB" />
          <img src={currencyMATIC} alt="MATIC" />
        </span>
      </a>
      <p id="via-by">
        <span>by&nbsp;&nbsp;</span>
        <a href="https://via.exchange/" target="_blank" rel="noopener noreferrer">
          <img src={Logo} id="via-logo" alt="logo" />
        </a>
      </p>
    </div>
  )
}
