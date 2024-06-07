
import { NavbarFooter } from "../navbarFooter/NavbarFooter"
import "./onlineOnly.css"

export const OnlineOnly = () => {
  return (
    <div>
      <div className="onlineOnly-section">
        <a>
          <div className="mens-section">
            <div><img className="mens-section-image" src="https://www.westside.com/cdn/shop/files/300950910BLACK_1.jpg?v=1696332486&width=493"></img></div>
            Mens
          </div>
        </a>
        <a href="#">
          <div className="womens-section">
          <div><img className="womens-section-image" src="https://www.westside.com/cdn/shop/files/300957889NAVY_1.jpg?v=1699624867&width=493"></img></div>
            Womens
          </div>
        </a>
        <div className="onlineOnly-list">
                <div className="onlineOnly-list-items"><a href="man">Mens</a></div>
                <div className="onlineOnly-list-items"><a href="#">Womens</a></div>
                <div className="onlineOnly-list-items"><a href="#">Western wear</a></div>
                <div className="onlineOnly-list-items"><a href="#">Ethenic wear</a></div>
                <div className="onlineOnly-list-items"><a href="#">Sleep wear</a></div>
                <div className="onlineOnly-list-items"><a href="#">Kids</a></div>
                <div className="onlineOnly-list-items"><a href="#">Footwear</a></div>
                <div className="onlineOnly-list-items"><a href="viewAll">View all</a></div>
        </div>
    </div>
    <NavbarFooter/>
    </div>
  )
}
