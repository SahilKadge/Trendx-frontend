import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from '../src/component/Navbar-components/Navbar/Navbar';
import { HomePage } from './component/homePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ViewAll } from './component/onlineOnly-selling-pages/ViewAll';
import { Man } from './component/onlineOnly-selling-pages/Man';
import { Women } from './component/onlineOnly-selling-pages/Women';
import { WesternWear } from './component/onlineOnly-selling-pages/WesternWear';
import { EthenicWear } from './component/onlineOnly-selling-pages/EthenicWear';
import { SleepWear } from './component/onlineOnly-selling-pages/SleepWear';
import { KidsWear } from './component/onlineOnly-selling-pages/KidsWear';
import { FootWear } from './component/onlineOnly-selling-pages/FootWear';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path='onlineOnlyMan' element={<Man/>}/>
          <Route path='OnlineOnlyWomen' element={<Women/>}/>
          <Route path='OnlineOnlyWestern' element={<WesternWear/>}/>
          <Route path='OnlineOnlyEthenic' element={<EthenicWear/>}/>
          <Route path='onlineOnlySleep' element={<SleepWear/>}/>
          <Route path='OnlineOnlyKid' element={<KidsWear/>}/>
          <Route path='onlineOnlyFootwear' element={<FootWear/>}/>
          <Route path='OnlineOnlyViewAll' element={<ViewAll/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
