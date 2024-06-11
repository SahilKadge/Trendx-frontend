import { MainSellingPage } from "../sellingPage/MainSellingPage"
import { womensOnlineOnlyProducts } from "../../data/onlineOnly/womens";

const path = 'online only - Womens';
export const Women = () => {
  return (
    <div>
        <MainSellingPage products={womensOnlineOnlyProducts} path={path}/>
    </div>
  )
}
