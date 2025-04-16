import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#16a34a', marginBottom: '1rem' }}>Payment Successful!</h2>
      <p style={{ marginBottom: '1.5rem' }}>Thank you for your payment.</p>
      <Link to="/" style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.75rem', textDecoration: 'none' }}>
        Return Home
      </Link>
    </div>
  );
}

export default Success;
