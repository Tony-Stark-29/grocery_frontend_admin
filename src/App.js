 
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { NotFound } from './views/NotFound';
import { Home } from './views/Home';
import { Overview } from './features/overview/Overview';
import { ManageItem } from './features/manageItems/ManageItem';
import { AllItem, AllItems, Products } from './features/products/Products';
import { Analytics } from './features/analytics/Analytics';
import { Notifications } from './features/notification/Notifications';
import 'jquery/dist/jquery.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
 
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index  path='overview' element={<Overview/>} ></Route>
          <Route path='manageitems' element={<ManageItem/>} ></Route>
          <Route path='products' element={<Products/>} ></Route>
          {/* <Route path='categories' element={<ProductCategories/>} ></Route>
          <Route path='notifications' element={<Notifications/>} ></Route> */}
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
