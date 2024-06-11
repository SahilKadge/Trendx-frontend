import { MainSellingPage } from "../sellingPage/MainSellingPage"
import { sleepWearOnlineOnlyProducts } from "../../data/onlineOnly/SleepWear";

const path = 'online only - Sleep Wear';
export const SleepWear = () => {
  return (
    <div>
        <MainSellingPage products={sleepWearOnlineOnlyProducts} path={path}/>
    </div>
  )
}
