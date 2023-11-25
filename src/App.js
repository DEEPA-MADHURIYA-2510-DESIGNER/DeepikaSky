import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Dispaly from './Component/Display/Dispaly';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dispaly/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
