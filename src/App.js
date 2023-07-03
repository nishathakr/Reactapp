
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
   <Route path='Login' element={<Login/>}/>
   <Route path="Header" element={<Header/>}/>
   <Route path="register"  element={<Register/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
