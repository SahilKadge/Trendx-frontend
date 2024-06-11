
import { NavbarFooter } from "../navbarFooter/NavbarFooter"
import "./onlineOnly.css"

export const OnlineOnly = () => {
  return (
    <div>
      <div className="onlineOnly-section">
        <a href="/onlineOnlyMan">
          <div className="mens-section">
            <div><img className="mens-section-image" src="https://www.westside.com/cdn/shop/files/300950910BLACK_1.jpg?v=1696332486&width=493"></img></div>
            Mens
          </div>
        </a>
        <a href="/onlineOnlyWomen">
          <div className="womens-section">
          <div><img className="womens-section-image" src="https://www.westside.com/cdn/shop/files/300957889NAVY_1.jpg?v=1699624867&width=493"></img></div>
            Womens
          </div>
        </a>
        <div className="onlineOnly-list">
                <div className="onlineOnly-list-items"><a href="/onlineOnlyMan">Mens</a></div>
                <div className="onlineOnly-list-items"><a href="/onlineOnlyWomen">Womens</a></div>
                <div className="onlineOnly-list-items"><a href="/onlineOnlyWestern">Western wear</a></div>
                <div className="onlineOnly-list-items"><a href="/onlineOnlyEthenic">Ethenic wear</a></div>
                <div className="onlineOnly-list-items"><a href="/onlineOnlySleep">Sleep wear</a></div>
                <div className="onlineOnly-list-items"><a href="/onlineOnlyKid">Kids</a></div>
                <div className="onlineOnly-list-items"><a href="/onlineOnlyFootwear">Footwear</a></div>
                <div className="onlineOnly-list-items"><a href="/onlineOnlyViewAll">View all</a></div>
        </div>
    </div>
    <NavbarFooter/>
    </div>
  )
}
