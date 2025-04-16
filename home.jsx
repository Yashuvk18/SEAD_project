import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Payflow Gateway 💳</h1>
      <p style={styles.text}>Your one-stop solution for secure payments.</p>
      <button style={styles.button} onClick={handleCheckoutClick}>
        Go to Checkout
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#666',
  },
  button: {
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s',
  },
};

export default Home;
