import { MainSellingPage } from "../sellingPage/MainSellingPage"
import { footWearOnlineOnlyProducts } from "../../data/onlineOnly/FootWear";

const path = 'online only - Footwear';
export const FootWear = () => {
  return (
    <div>
        <MainSellingPage products={footWearOnlineOnlyProducts} path={path}/>
    </div>
  )
}
