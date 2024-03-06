
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path='/Login' element={<Login/>}></Route>
      
      </Routes>
    </BrowserRouter>
  );
}
//<Route path='.Login' element={<Login/>}></Route>
export default App;
