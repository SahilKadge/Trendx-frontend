import { NavbarFooter } from "../navbarFooter/NavbarFooter"
import './BeautyNavbar.css'
export const BeautyNavbar = () => {
  return (
    <div>
        <div className="beautynavbar-div">
        <a href="#">
            <div className="beautynavbar-image-section">
            <div ><img className="beautynavbar-image" src="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/Sunscreenumbrella.jpg?v=1710408014"></img></div>
                Beauty
            </div>
        </a>
        <div className="beautynavbar-section-2">
        <div className="beautynavbar-section-head"><a href="#">New In</a></div>
            <div className="beautynavbar-section-head"><a href="#">Trending Now</a></div>

            
        </div>
        <div className="beautynavbar-section-3">
            <div className="beautynavbar-section-head"><a href="#">Fragrances</a></div>
            <div className="beautynavbar-section-content"><a href="#">View All</a></div>
            <div className="beautynavbar-section-content"><a href="#">Man</a></div>
            <div className="beautynavbar-section-content"><a href="#">Woman</a></div>
            <div className="beautynavbar-section-content"><a href="#">Unisex</a></div>
            
        </div>
        <div className="beautynavbar-section-4">
            <div className="beautynavbar-section-head"><a href="#">Skin Care</a></div>
            <div className="beautynavbar-section-content"><a href="#">View All</a></div>
            <div className="beautynavbar-section-content"><a href="#">Bath | Shower</a></div>
            <div className="beautynavbar-section-content"><a href="#">Face</a></div>
        </div>
        <div className="beautynavbar-section-5">
            <div className="beautynavbar-section-head"><a href="#">Makeup</a></div>
            <div className="beautynavbar-section-content"><a href="#">View All</a></div>
            <div className="beautynavbar-section-content"><a href="#">Face | Cheek</a></div>
            <div className="beautynavbar-section-content"><a href="#">Eye</a></div>
            <div className="beautynavbar-section-content"><a href="#">Lips</a></div>
            <div className="beautynavbar-section-content"><a href="#">Nails</a></div>
        </div>
        <div className="beautynavbar-section-6">
            <div className="beautynavbar-section-head"><a href="#">Accessories</a></div>
            
        </div>
    </div>
    <NavbarFooter/>
    </div>
  )
}
