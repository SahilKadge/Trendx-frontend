import { MainSellingPage } from "../sellingPage/MainSellingPage"
import { viewAllOnlineOnlyProducts } from "../../data/onlineOnly/viewAll"
const path = 'online only- view all'
export const ViewAll = () => {
  return (
    <div>
      <MainSellingPage products={viewAllOnlineOnlyProducts} path={path}/>
    </div>
  )
}
