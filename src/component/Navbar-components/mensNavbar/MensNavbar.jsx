import { NavbarFooter } from "../navbarFooter/NavbarFooter"
import "./MensNavbar.css"
export const MensNavbar = () => {
  return (
    <div>
        <div className="mensnavbar-div">
        <a href="#">
            <div className="mensnavbar-image-section">
                <div > <img className="mensnavbar-image" src="https://www.westside.com/cdn/shop/files/300977221OFFWHITE_1.jpg?v=1715591237&width=493"></img></div>
                Mens
            </div>
        </a>
        <div className="mensnavbar-section-2">
            <div className="mensnavbar-section-head"><a href="#">Trending Now</a></div>
            <div className="mensnavbar-section-head"><a href="#">Gifts for Him</a></div>
        </div>
        <div className="mensnavbar-section-3">
            <div className="mensnavbar-section-head"><a href="#">Western wear</a></div>
            <div className="mensnavbar-section-content"><a href="#">New In</a></div>
            <div className="mensnavbar-section-content"><a href="#">View All</a></div>
            <div className="mensnavbar-section-content"><a href="#">Casual Shirts</a></div>
            <div className="mensnavbar-section-content"><a href="#">T-shirts</a></div>
            <div className="mensnavbar-section-content"><a href="#">Polo Shirts</a></div>
            <div className="mensnavbar-section-content"><a href="#">Sweatshirts</a></div>
            <div className="mensnavbar-section-content"><a href="#">Jeans</a></div>
        </div>
        <div className="mensnavbar-section-4">
            <div className="mensnavbar-section-head"><a href="#">Foatwear</a></div>
            <div className="mensnavbar-section-content"><a href="#">New In</a></div>
            <div className="mensnavbar-section-content"><a href="#">View All</a></div>
            <div className="mensnavbar-section-content"><a href="#">Casual Shoes</a></div>
            <div className="mensnavbar-section-content"><a href="#">Formal Shoes</a></div>
            <div className="mensnavbar-section-content"><a href="#">Sneakers | Trainers</a></div>
            <div className="mensnavbar-section-content"><a href="#">Flip Flops | Sandals | Slides</a></div>
            <div className="mensnavbar-section-content"><a href="#">Boots</a></div>
        </div>
        <div className="mensnavbar-section-5">
            <div className="mensnavbar-section-head"><a href="#">Fragrances</a></div>
        </div>
    </div>
    <NavbarFooter/>
    </div>
  )
}
