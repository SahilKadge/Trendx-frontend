import { NavbarFooter } from "../navbarFooter/NavbarFooter"
import './KidsNavbar.css'
export const KidsNavar = () => {
  return (
    <div>
        <div className="womensnavbar-div">
        <a href="#">
            <div className="kids-image-section">
                <div ><img className="mensnavbar-image" src="https://www.westside.com/cdn/shop/files/WS_Web_Category_Navigation_250x251_03_1ea43459-db11-418f-8379-f2d7f81290ce.jpg?v=1717056032&width=2000"></img></div>
                Kids
            </div>
        </a>
        <div className="kids-section-2">
        <div className="kids-section-head"><a href="#">New In</a></div>
            <div className="kids-section-head"><a href="#">Trending Now</a></div>
            <div className="kids-section-head"><a href="#">View All</a></div>
            
        </div>
        <div className="kids-section-3">
            <div className="kids-section-head"><a href="#">Girls | 3-14 Yrs</a></div>
            <div className="kids-section-content"><a href="#">Dresses</a></div>
            <div className="kids-section-content"><a href="#">Tops | Jackets</a></div>
            <div className="kids-section-content"><a href="#">Skirts</a></div>
            <div className="kids-section-content"><a href="#">Jeans | Trousers</a></div>
            <div className="kids-section-content"><a href="#">Foatwear</a></div>
            
        </div>
        <div className="kids-section-4">
            <div className="kids-section-head"><a href="#">Boys | 3-14 Yrs</a></div>
            <div className="kids-section-content"><a href="#">Shirts | T-shirts</a></div>
            <div className="kids-section-content"><a href="#">Jackets</a></div>
            <div className="kids-section-content"><a href="#">Jeans | Trousers</a></div>
            <div className="kids-section-content"><a href="#">Joggers | Shorts</a></div>
            <div className="kids-section-content"><a href="#">Foatwear</a></div>
        </div>
        <div className="kids-section-5">
            <div className="kids-section-head"><a href="#">Baby Girl | 0-3 Yrs</a></div>
            <div className="kids-section-content"><a href="#">Dresses</a></div>
            <div className="kids-section-content"><a href="#">Tops | T-shirts</a></div>
            <div className="kids-section-content"><a href="#">Jackets</a></div>
            <div className="kids-section-content"><a href="#">Body Suit</a></div>
            <div className="kids-section-content"><a href="#">Foatwear</a></div>
        </div>
        <div className="kids-section-6">
            <div className="kids-section-head"><a href="#">Baby Boy | 0-3 Yrs</a></div>
            <div className="kids-section-content"><a href="#">Shirts | T-shirts</a></div>
            <div className="kids-section-content"><a href="#">Jackets</a></div>
            <div className="kids-section-content"><a href="#">Jeans | Trousers</a></div>
            <div className="kids-section-content"><a href="#">Body Suit</a></div>
            <div className="kids-section-content"><a href="#">Foatwear</a></div>
        </div>
    </div>
    <NavbarFooter/>
    </div>
  )
}
