import "./HomePage.css"
import { ImageSlider } from "../Slider/ImageSlider"

const images = [
  {
    "url":"https://www.westside.com/cdn/shop/files/ETHNIC_BOTTOMS_Web_5f393e26-a4f7-48c6-9d8f-65e1276fb8e2.jpg?v=1716529750",
    "href":"#",
  },
  {
    "url":"https://www.westside.com/cdn/shop/files/Online_Only_Web_copy_2.jpg?v=1715324500",
    "href":"#",
  },
  {
    "url":"https://www.westside.com/cdn/shop/files/ACTIVEWEAR_Web.jpg?v=1717133886",
    "href":"#",
  },
  {
    "url":"https://www.westside.com/cdn/shop/files/Formals_Web_08c37cbf-b414-4648-ad9b-94feab218333.jpg?v=1717134236",
    "href":"#",
  },
  {
    "url":"https://www.westside.com/cdn/shop/files/DRESSES_Web_efd7e8c5-aeb6-429e-b410-4351cca891bf.jpg?v=1715924287",
    "href":"#"
  }

]
const images_sec =[
  {
    "url":"https://www.westside.com/cdn/shop/files/TRENDING_NOW_Web.jpg?v=1715941230",
    "href":"#",
  },
  {
    "url":"https://www.westside.com/cdn/shop/files/MAN_Web_4fb76683-4e2a-4a28-8039-e7d9ec3f7be9.jpg?v=1717135324",
    "href":"#",
  },
  {
    "url":"https://www.westside.com/cdn/shop/files/CASUAL_SHIRTS_Web_fff2637b-f74f-47ff-91ba-e2719fdef16e.jpg?v=1717135482",
    "href":"#",
  },
  {
    "url":"https://www.westside.com/cdn/shop/files/CASUAL_BOTTOMS_Web_fb485983-085f-4e43-b201-cd4478e7c0c6.jpg?v=1717135851",
    "href":"#",
  },
  {
    "url":"https://www.westside.com/cdn/shop/files/FOOTWEAR_Web-1_92551a44-fcfc-4f27-8f71-cf573f3d8087.jpg?v=1717136664",
    "href":"#",
  },
  {
    "url":"https://www.westside.com/cdn/shop/files/LINEN_UPDATE_Web.jpg?v=1717135598",
    "href":"#"
  },
]
const images_three = [
  {
    "url":"https://www.westside.com/cdn/shop/files/BATH_Web_74e8dd03-71da-4df0-9753-2d520c64394e.jpg?v=1716530222",
    "href":"#",
  },
  {
    "url":"https://www.westside.com/cdn/shop/files/HOME_Web_049ccda8-c421-4450-8ae7-f64c23fd791b.jpg?v=1716530098",
    "href":"#",
  },
]
export const HomePage = () => {
  return (
    <div className="Homepage-div">
          <div>
            <ImageSlider images={images}/>
          </div>
          <div className="banner-self-section">
              <div className="banner-self-content">
                  <div className="banner-self-content-heading">
                  SPECTACULAR SPECS
                  </div>
                  <p className="banner-self-content-para">The specs of ypur choice</p>
                  <button className="banner-self-button">SPECS</button>
              </div>
              <div className="banner-self-image-div"><img className="banner-self-image" src="../../../public/pictures/glasses_homepage.jpg" alt="specs"/></div>  
          </div>
          <a href="#"><img className="banner-image" src="https://www.westside.com/cdn/shop/files/Girls_W_67616955-c3d1-411b-b96a-45d266e1f2dd.gif?v=1715166276"></img></a>
          <div>
            <ImageSlider images={images_sec}/>
          </div>
          <a href="#"><img className="banner-image" src="https://www.westside.com/cdn/shop/files/BEAUTY_Web_7abcba25-eed1-454a-ae88-45bbb455a42e.jpg?v=1717133688"></img></a>
          <a href="#"><img className="banner-image" src="https://www.westside.com/cdn/shop/files/Boys_W_f9190c91-8cb7-4218-a55d-46e705ca0592.gif?v=1715166332"></img></a>
          <ImageSlider images={images_three}/>
          

    </div>
  )
}
