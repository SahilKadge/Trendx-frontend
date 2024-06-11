import { MainSellingPage } from "../sellingPage/MainSellingPage"
import { kidsOnlineOnlyProducts } from "../../data/onlineOnly/Kids";

const path = 'online only - Kids Wear';
export const KidsWear = () => {
  return (
    <div>
        <MainSellingPage products={kidsOnlineOnlyProducts} path={path}/>
    </div>
  )
}
