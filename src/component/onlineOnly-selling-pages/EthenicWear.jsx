import { MainSellingPage } from "../sellingPage/MainSellingPage"
import { ethenicWearOnlineOnlyProducts } from "../../data/onlineOnly/EthenicWear";

const path = 'online only - Ethenic Wear';
export const EthenicWear = () => {
  return (
    <div>
        <MainSellingPage products={ethenicWearOnlineOnlyProducts} path={path}/>
    </div>
  )
}
