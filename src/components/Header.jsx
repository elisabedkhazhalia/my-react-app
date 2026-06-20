import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ padding: '15px', background: '#333', color: '#fff', display: 'flex', gap: '20px' }}>
    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
    <Link to="/users" style={{ color: '#fff', textDecoration: 'none' }}>Users</Link>
  </header>
);
export default Header;