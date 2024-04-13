
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
