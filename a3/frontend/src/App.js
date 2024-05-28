import './App.css';
import NavBar from './components/header/NavBar'
import Homepage from './pages/Homepage'
import Footer from './components/footer/Footer'
import PickUp from './pages/PickUp'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pickup" element={<PickUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
