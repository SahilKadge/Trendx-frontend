import { MainSellingPage } from "../sellingPage/MainSellingPage"
import { mensOnlineOnlyProducts } from "../../data/onlineOnly/Mens";

const path = 'online only - Man';
export const Man = () => {
  return (
    <div>
        <MainSellingPage products={mensOnlineOnlyProducts} path={path}/>
    </div>
  )
}
