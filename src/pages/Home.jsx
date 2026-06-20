import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>iPhone 12 and iPhone 12 mini</h1>
      <p>Blast past fast. A superpowerful chip. 5G speed.</p>
      {/* ფოტოს ჩასმა - სურათი ჩააგდე public ფოლდერში */}
      <img src="/iphone12.png" alt="iPhone 12" style={{ width: '400px' }} />
      <br />
      <button 
        onClick={() => navigate('/users')}
        style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}
      >
        Buy Now (See Users)
      </button>
    </div>
  );
};
export default Home;