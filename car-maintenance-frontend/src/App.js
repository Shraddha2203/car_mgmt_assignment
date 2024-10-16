import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UsersPage from './pages/UsersPage';
import CarsPage from './pages/CarsPage';
import './css/style.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/cars" element={<CarsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
