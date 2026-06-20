import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Blast past fast.</h1>
      <p>iPhone 12 - super powerful chip, 5G speed.</p>
      <button onClick={() => navigate('/users')}>See Users</button>
    </div>
  );
};
export default Home;