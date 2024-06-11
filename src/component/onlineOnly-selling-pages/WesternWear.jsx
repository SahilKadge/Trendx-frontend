
import { MainSellingPage } from '../sellingPage/MainSellingPage'
import { westernWearOnlineOnlyProducts } from '../../data/onlineOnly/WesternWear'
const path = 'online only- western wear'
export const WesternWear = () => {
  return (
    <div>
      <MainSellingPage products={westernWearOnlineOnlyProducts} path={path}/>
    </div>
  )
}
