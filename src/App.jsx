import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from '../src/component/Navbar-components/Navbar/Navbar';
import { HomePage } from './component/homePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ViewAll } from './component/onlineOnly-selling-pages/ViewAll';
import { Man } from './component/onlineOnly-selling-pages/Man';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path='man' element={<Man/>}/>
          <Route path='viewAll' element={<ViewAll/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
