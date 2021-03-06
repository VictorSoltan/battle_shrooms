import React from 'react' 
import '../styles/partnership.scss'

import A2 from '../assets/partnership/Partnership/2A.png'
import AVG from '../assets/partnership/Partnership/AVG.png'
import BigBrainHoldings from '../assets/partnership/Partnership/BigBrainHoldings.png'
import BlueWheel from '../assets/partnership/Partnership/BlueWheel.png'
import CCK from '../assets/partnership/Partnership/CCK.png'
import CryptoOmg from '../assets/partnership/Partnership/cryptoOmg.png'
import CryptoPing from '../assets/partnership/Partnership/CryptoPing.png'
import Acheron from '../assets/partnership/Partnership/Acheron.png'
import FrenchHunters from '../assets/partnership/Partnership/3.png'
import CSPDAO from '../assets/partnership/Partnership/CSPDAO.png'
import DAOMaker from '../assets/partnership/Partnership/DAOMaker.png'

import Enjinstarter from '../assets/partnership/Partnership/Enjinstarter.png'
import Ex from '../assets/partnership/Partnership/ex.png'
import GAP from '../assets/partnership/Partnership/GAP.png'
import LegionVentures from '../assets/partnership/Partnership/legion_ventures.png'
import MagnusCapital from '../assets/partnership/Partnership/MagnusCapital.png'
import Onchain from '../assets/partnership/Partnership/Onchain.png'
import Seedify_logo from '../assets/partnership/Partnership/Seedify_logo.png'
import Truepnl from '../assets/partnership/Partnership/Truepnl.png'
import Vespertine from '../assets/partnership/Partnership/Vespertine.png'
import Whitelist from '../assets/partnership/Partnership/Whitelist.png'
import VIA from '../assets/partnership/Partnership/VIA.png'

import ExcaliburCapital from '../assets/partnership/Partnership/logo-w.png'
import Magicut from '../assets/partnership/Partnership/Magicut.png'
import Pixelinc from '../assets/partnership/Partnership/Pixelinc.png'
import Red_swiss from '../assets/partnership/Partnership/red_swiss.png'
import SafeLaunch from '../assets/partnership/Partnership/SafeLaunch.png'
import EmpireVenture from '../assets/partnership/Partnership/EmpireVenture.png'
import Zephhyrus from '../assets/partnership/Partnership/Zephhyrus.png'

// MEDIA 
import Blockohooters from '../assets/partnership/Media/Blockohooters.png'
import Ap from '../assets/partnership/Media/ap.png'
import AsiaOne from '../assets/partnership/Media/asiaOne.png'
import Benzinga from '../assets/partnership/Media/benzinga.png'
import Bitcoinist from '../assets/partnership/Media/Bitcoinist.png'
import Coinquora from '../assets/partnership/Media/coinquora.png'
import Fn from '../assets/partnership/Media/fn.png'
import Investing from '../assets/partnership/Media/investing.png'
import Markerwatch from '../assets/partnership/Media/markerwatch.png'
import Menafn from '../assets/partnership/Media/menafn.png'
import Newsbtc from '../assets/partnership/Media/newsbtc.png'
import Xzx from '../assets/partnership/Media/xzx.png'
import YahooFinance from '../assets/partnership/Media/Yahoo_Finance.png'
import YahooMoney from '../assets/partnership/Media/Yahoo_Money.png'
import YahooNews from '../assets/partnership/Media/yahoo-news.png'
import Coinpeake from '../assets/partnership/Media/??oinspeaker.png'

// LAUNCHPADS 
import Bullperks from '../assets/partnership/Launchpads/bullperks.png'
import GameStation from '../assets/partnership/Launchpads/GameStation.png'
import Oxbull from '../assets/partnership/Launchpads/Oxbull.png'
import Seedify from '../assets/partnership/Launchpads/Seedify.png'
import Decubate from '../assets/partnership/Launchpads/Decubate.png'

import aLeft from '../assets/partnership/arrowLeft.svg'
import aRight from '../assets/partnership/arrowRight.svg'

export default function Partnership() {
  
  const LAUNCHPADS = [
    { img: Bullperks, link: 'https://app.bullperks.com/deal-detail?address=0xddc067f4b913bc50eb174042ce7910cee5faff8e'},
    { img: Oxbull, link: 'https://www.oxbull.tech/#/presale'},
    { img: Enjinstarter, link: 'https://launchpad.enjinstarter.com/'},
    { img: Ex, link: 'https://app.equinox.fund/project/battleverse'},
    { img: Seedify, link: 'https://launchpad.seedify.fund/pool_detail/upcoming/61f7639d8acc682f6f0d56b3'},
    { img: GameStation, link: 'https://www.gamestation.io/'}
  ]
 
  const PARTNERSHIP = [
    { img: A2 },
    { img: MagnusCapital },
    { img: AVG },
    { img: Ex },
    { img: BigBrainHoldings },
    { img: BlueWheel },
    { img: Seedify_logo },
    { img: CCK },
    { img: Bullperks },
    { img: CryptoOmg },
    { img: CryptoPing },
    { img: Acheron },
    { img: FrenchHunters },
    { img: CSPDAO },
    { img: DAOMaker },
    { img: Enjinstarter },
    { img: Decubate },
    { img: VIA },
    { img: GAP },
    { img: GameStation },
    { img: LegionVentures },
    { img: Onchain },
    { img: Truepnl },
    { img: Vespertine },
    { img: Whitelist },
    { img: ExcaliburCapital },
    { img: Magicut },
    { img: Pixelinc },
    { img: Red_swiss },
    { img: SafeLaunch },
    { img: EmpireVenture },
    { img: Zephhyrus }
  ]

  const MEDIA = [
    { img: Blockohooters },
    { img: Ap  },
    { img: AsiaOne },
    { img: Benzinga },
    { img: Bitcoinist  },
    { img: Coinquora  },
    { img: Fn },
    { img: Investing },
    { img: Markerwatch },
    { img: Menafn  },
    { img: Newsbtc },
    { img: Xzx  },
    { img: YahooFinance },
    { img: YahooMoney },
    { img: YahooNews },
    { img: Coinpeake }
  ]

  let [launchNum, setLaunchNum] = React.useState(0)
  let [partnerNum, setPartnerNum] = React.useState(0)
  let [mediaNum, setMediaNum] = React.useState(0)

  const partnershipDesctop = [
    { header: ['PARTNERSHIP', 'MEDIA PARTNERSHIP', 'LAUNCHPADS'], 
      partners: [PARTNERSHIP, MEDIA, LAUNCHPADS], 
      num: [launchNum, partnerNum, mediaNum] }
  ]
  
  const adaptivePartners = [
    { header: ['PARTNERSHIP'], partners: [PARTNERSHIP], num: [launchNum] },
    { header: ['MEDIA PARTNERSHIP'], partners: [MEDIA], num: [partnerNum] },
    { header: ['LAUNCHPADS'], partners: [LAUNCHPADS], num: [mediaNum] }
  ]

  let [num, setNum] = React.useState(0)

  return(
    window.innerWidth > 600 ? partnershipDesctop :  adaptivePartners).map((item, index) => (
      <div className='partnershipContainer' key={index}>
        <div className='partnerHeader'>
          {(item.header).map((item, indx) => (
            <h2 key={indx} onClick={() => setNum(indx)} className={(indx===num||window.innerWidth) < 600 && index===1 ? 'media_active active' : (indx===num||window.innerWidth) < 600 && 'active'}>{item}</h2>
          ))}
        </div>
        <main>
          {((item.partners[window.innerWidth > 600 ? num : 0]).slice(item.num[window.innerWidth > 600 ? num : 0], item.num[window.innerWidth > 600 ? num : 0]+9)).map((item, index) => (
            <div className='container' key={index}>
              <div className='light' />
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img key={index} src={item.img} alt="partner"/>
              </a>
              <div className='particles'>
                {[...Array(window.width > 1024 ? Math.floor(Math.random() * 4 + 4) : Math.floor(Math.random() * 2 + 3)).keys()].map((indx) => (
                    <div className='particle' key={indx} 
                      style={{background: '#00C2FF', 
                        marginTop: Math.floor(Math.random() * 90) - 25 + "%",
                        marginLeft: Math.floor(Math.random() * 5) + "%",
                        animationDuration: Math.floor(Math.random() * 4 + 6) + "s"
                    }}/>
                ))}
              </div>
            </div>
          ))}
        </main>
        {(item.partners[window.innerWidth > 600 ? num : 0]).length > 9 &&
        <footer>
          <button>
          {window.innerWidth > 600 ? 

            <img src={aLeft} alt="left arrow" onClick={() => 
            num===0&&launchNum-9>=0 ? setLaunchNum(launchNum-9) : num===0 ? setLaunchNum(Math.ceil((item.partners[num]).length/9)*9-9)
            : num===1&&partnerNum-9>=0 ? setPartnerNum(partnerNum-9) : num===1 ? setPartnerNum(Math.ceil((item.partners[num]).length/9)*9-9) 
            : mediaNum-9>=0 ? setMediaNum(mediaNum-9) : setMediaNum(Math.ceil((item.partners[num]).length/9)*9-9)
              }/>
              :
              <img src={aLeft} alt="left arrow" onClick={() => 
                index===0&&launchNum-9>=0 ? setLaunchNum(launchNum-9) : index===0 ? setLaunchNum(Math.ceil((item.partners[0]).length/9)*9-9)
                : index===1&&partnerNum-9>=0 ? setPartnerNum(partnerNum-9) : index===1 ? setPartnerNum(Math.ceil((item.partners[0]).length/9)*9-9) 
                : mediaNum-9>=0 ? setMediaNum(mediaNum-9) : setMediaNum(Math.ceil((item.partners[0]).length/9)*9-9)
                  }/>}
          </button>
          {window.innerWidth > 600 ? 
            [...Array(Math.ceil((item.partners[num]).length/9)).keys()].map((index) => (
              <div key={index} onClick={() => num === 0 ? setLaunchNum(index*9) : num === 1 ? setPartnerNum(index*9) : setMediaNum(index*9)}  className={item.num[num] === index*9 && 'active'}/>
            ))
          :           
            [...Array(Math.ceil((item.partners[0]).length/9)).keys()].map((indx) => (
              <div key={indx} onClick={() => index === 0 ? setLaunchNum(indx*9) : index === 1 ? setPartnerNum(indx*9) : setMediaNum(indx*9)}  className={item.num[0] === indx*9 && 'active'}/>
            ))}
          <button>
          {window.innerWidth > 600 ? 

          <img src={aRight} alt="right arrow" onClick={() => 
            num===0&&(item.partners[num]).length-9>launchNum ? setLaunchNum(launchNum+9) : num===0 ? setLaunchNum(0)
             : num===1&&(item.partners[num]).length-9>partnerNum ? setPartnerNum(partnerNum+9) : num===1 ? setPartnerNum(0) 
             : (item.partners[num]).length-9>mediaNum ? setMediaNum(mediaNum+9) : setMediaNum(0)
             }/>
             :
             <img src={aRight} alt="right arrow" onClick={() => 
              index===0&&(item.partners[0]).length-9>launchNum ? setLaunchNum(launchNum+9) : index===0 ? setLaunchNum(0)
               : index===1&&(item.partners[0]).length-9>partnerNum ? setPartnerNum(partnerNum+9) : index===1 ? setPartnerNum(0) 
               : (item.partners[0]).length-9>mediaNum ? setMediaNum(mediaNum+9) : setMediaNum(0)
               }/>}
          </button>
        </footer>}
      </div>
    )
  )
}