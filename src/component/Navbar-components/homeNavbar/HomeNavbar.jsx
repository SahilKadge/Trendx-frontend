import { NavbarFooter } from "../navbarFooter/NavbarFooter"
import './HomeNavbar.css'
export const HomeNavbar = () => {
  return (
    <div>
        <div className="homenavbar-div">
        <a href="#">
            <div className="homenavbar-image-section">
            <div ><img className="homenavbar-image" src="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/300975237001_1.jpg?v=1716900184"></img></div>
                Home
            </div>
        </a>
        <div className="homenavbar-section-2">
        <div className="homenavbar-section-head"><a href="#">New In</a></div>
        <div className="homenavbar-section-head"><a href="#">Trending Now</a></div>
        <div className="homenavbar-section-head"><a href="#">Furniture</a></div>
            
        </div>
        <div className="homenavbar-section-3">
            <div className="homenavbar-section-head"><a href="#">Living</a></div>
            <div className="homenavbar-section-content"><a href="#">View All</a></div>
            <div className="homenavbar-section-content"><a href="#">Cushions</a></div>
            <div className="homenavbar-section-content"><a href="#">Candle | Stands</a></div>
            <div className="homenavbar-section-content"><a href="#">Home Fragrance</a></div>
            <div className="homenavbar-section-content"><a href="#">Flower | Vases</a></div>
            <div className="homenavbar-section-content"><a href="#">Lights</a></div>
            
        </div>
        <div className="homenavbar-section-4">
            <div className="homenavbar-section-head"><a href="#">Kitchen</a></div>
            <div className="homenavbar-section-content"><a href="#">View All</a></div>
            <div className="homenavbar-section-content"><a href="#">Tea | Coffee</a></div>
            <div className="homenavbar-section-content"><a href="#">Kitchenware</a></div>
            <div className="homenavbar-section-content"><a href="#">Table Linen</a></div>
            <div className="homenavbar-section-content"><a href="#">Bottles</a></div>
        </div>
        <div className="homenavbar-section-5">
            <div className="homenavbar-section-head"><a href="#">Bed</a></div>
            <div className="homenavbar-section-content"><a href="#">View All</a></div>
            <div className="homenavbar-section-content"><a href="#">Pillow Cases | Fillers</a></div>
            <div className="homenavbar-section-content"><a href="#">Bedsheets</a></div>
            <div className="homenavbar-section-content"><a href="#">Duvet Covers</a></div>
            
        </div>
        <div className="homenavbar-section-6">
            <div className="homenavbar-section-head"><a href="#">Bath</a></div>
            <div className="homenavbar-section-content"><a href="#">Bath Accessories</a></div>
            
        </div>
    </div>
    <NavbarFooter/>
    </div>
  )
}
