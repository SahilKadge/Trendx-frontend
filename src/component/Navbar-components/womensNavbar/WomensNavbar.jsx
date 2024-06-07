import { NavbarFooter } from "../navbarFooter/NavbarFooter"
import './WomensNavbar.css'
export const WomensNavbar = () => {
  return (
    <div>
        <div className="womensnavbar-div">
        <a href="#">
            <div className="womensnavbar-image-section">
            <div > <img className="mensnavbar-image" src="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/300973449WHITE_1.jpg?v=1710421890"></img></div>
                Womens
            </div>
        </a>
        <div className="womensnavbar-section-2">
        <div className="womensnavbar-section-head"><a href="#">Western Wear</a></div>
            <div className="womensnavbar-section-head"><a href="#">Trending Now</a></div>
            <div className="womensnavbar-section-head"><a href="#">Gifts for Her</a></div>
            <div className="womensnavbar-section-content"><a href="#">Shirts</a></div>
            <div className="womensnavbar-section-content"><a href="#">Jeans</a></div>
            <div className="womensnavbar-section-content"><a href="#">Blazers | Jackets</a></div>
            <div className="womensnavbar-section-content"><a href="#">Trousers | Joggers</a></div>
            <div className="womensnavbar-section-content"><a href="#">Skirts | Shorts</a></div>
        </div>
        <div className="womensnavbar-section-3">
            <div className="womensnavbar-section-head"><a href="#">Ethenic Wear</a></div>
            <div className="womensnavbar-section-content"><a href="#">Kurta</a></div>
            <div className="womensnavbar-section-content"><a href="#">Ethenic Suits</a></div>
            <div className="womensnavbar-section-content"><a href="#">Ethenic Tops</a></div>
            <div className="womensnavbar-section-content"><a href="#">Palazzos | skirts</a></div>
            <div className="womensnavbar-section-content"><a href="#">Salwars | Pants</a></div>
            <div className="womensnavbar-section-content"><a href="#">Dupattas | Shawls</a></div>
            
        </div>
        <div className="womensnavbar-section-4">
            <div className="womensnavbar-section-head"><a href="#">Foatwear</a></div>
            <div className="womensnavbar-section-content"><a href="#">New In</a></div>
            <div className="womensnavbar-section-content"><a href="#">View All</a></div>
            <div className="womensnavbar-section-content"><a href="#">Flat Sandals</a></div>
            <div className="womensnavbar-section-content"><a href="#">Formal Shoes</a></div>
            <div className="womensnavbar-section-content"><a href="#">Sneakers | Trainers</a></div>
            <div className="womensnavbar-section-content"><a href="#">Flip Flops | Beach Sandals</a></div>
            <div className="womensnavbar-section-content"><a href="#">Heeled Sandals</a></div>
        </div>
        <div className="womensnavbar-section-5">
            <div className="womensnavbar-section-head"><a href="#">Fragrances</a></div>
            <div className="womensnavbar-section-head"><a href="#">Beauty</a></div>
        </div>
    </div>
    <NavbarFooter/>
    </div>
  )
}
