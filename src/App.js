 
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { NotFound } from './views/NotFound';
import { Dashboard } from './views/Dashboard';
import { Overview } from './components/Overview';
import { ManageItem } from './components/ManageItem';
import { AllItem, AllItems } from './components/AllItems';
import { Analytics } from './components/Analytics';
import { Notifications } from './components/Notifications';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route index element={<Overview/>} ></Route>
          <Route path='manageitems' element={<ManageItem/>} ></Route>
          <Route path='allitems' element={<AllItems/>} ></Route>
          <Route path='analytics' element={<Analytics/>} ></Route>
          <Route path='notifications' element={<Notifications/>} ></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
