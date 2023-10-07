
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <div >

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
