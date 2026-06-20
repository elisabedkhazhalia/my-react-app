import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/" className="logo">TechSpace</Link>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/users" className="nav-link">Users</Link>
      </nav>
    </header>
  );
};

export default Header;