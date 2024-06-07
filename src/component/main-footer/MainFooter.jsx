import "./MainFooter.css"

export const MainFooter = () => {
  return (
    <div className="mainfooter">
        <div className="mainfooter-1st-section">
        <div className="mainfooter-div">
            <span className="mainfooter-div-heading">DOWNLOAD THE APP</span>
            <a><img className = "download-button" src="https://cdn.shopify.com/s/files/1/0504/3457/2487/files/Frame_2.svg?v=1681220243"></img></a>
            <a className="download-button"><img src="https://cdn.shopify.com/s/files/1/0504/3457/2487/files/Frame_3.svg?v=1681220243"></img></a>
        </div>
        <div className="mainfooter-div">
            <div className="mainfooter-div-heading">SHOP</div>
            <a className="mainfooter-div-content"><div >WOMENS</div></a>
            <a className="mainfooter-div-content"><div>MENS</div></a>
            <a className="mainfooter-div-content"><div>KIDS</div></a>
            <a className="mainfooter-div-content"><div>BEAUTY</div></a>
            <a className="mainfooter-div-content"><div>HOME</div></a>
        </div>
        <div className="mainfooter-div">
            <div className="mainfooter-div-heading">SITS & STORIES</div>
            <a className="mainfooter-div-content"><div>ABOUT US</div></a>
            <a  className="mainfooter-div-content"><div>CONTACT US</div></a>
            <a  className="mainfooter-div-content"><div>MEDIA CENTER</div></a>
            <a  className="mainfooter-div-content"><div>LOCATION</div></a>
            <a  className="mainfooter-div-content"><div>MEMBERSHIP</div></a>
        </div>
        <div className="mainfooter-div">
            <div className="mainfooter-div-heading">JOIN OUR NEWSLETTER</div>
            <div className="mainfooter-div-para">Get the latest updates from our stores</div>
            <input className="mainfooter-div-input" placeholder="email" id="email" name="email" type="email" />
            <button className="subscribe">SUBSCRIBE</button>
        </div>
    </div>
    <div className="mainfooter-2nd-section">
        <div className="mainfooter-2nd-content"><a>TERMS & CONDITIONS</a></div>
        <div className="mainfooter-2nd-content"><a>PRIVACY POLICY</a></div>
        <div className="mainfooter-2nd-content"><a>RETURN POLICY</a></div>
    </div>
    </div>
  )
}
