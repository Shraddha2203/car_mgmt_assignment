import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Users</Link></li>
        <li><Link to="/cars">Cars</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
