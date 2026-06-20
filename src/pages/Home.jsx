import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="text-section">
        <h1>Welcome to TechSpace</h1>
        <p>
          We build the digital future. Discover our amazing community of developers 
          and tech enthusiasts from all around the world. Join us today and start your journey.
        </p>
        <button className="primary-btn" onClick={() => navigate('/users')}>
          Meet Our Users
        </button>
      </div>

      <div className="image-section">
        {/* ფოტოს პირდაპირი ლინკი, გადმოწერა არ გჭირდება! */}
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
          alt="Team Working" 
        />
      </div>
    </div>
  );
};

export default Home;