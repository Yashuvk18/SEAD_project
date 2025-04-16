import React from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate('/success');
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Checkout</h2>
      <form onSubmit={handlePayment} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Cardholder Name</label>
          <input type="text" required style={{ width: '100%', border: '1px solid #ccc', padding: '0.5rem', borderRadius: '0.375rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Card Number</label>
          <input type="text" required maxLength={16} style={{ width: '100%', border: '1px solid #ccc', padding: '0.5rem', borderRadius: '0.375rem' }} />
        </div>
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Expiry</label>
            <input type="text" placeholder="MM/YY" required style={{ width: '100%', border: '1px solid #ccc', padding: '0.5rem', borderRadius: '0.375rem' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>CVV</label>
            <input type="password" maxLength={3} required style={{ width: '100%', border: '1px solid #ccc', padding: '0.5rem', borderRadius: '0.375rem' }} />
          </div>
        </div>
        <button type="submit" style={{ backgroundColor: '#16a34a', color: 'white', width: '100%', padding: '0.75rem', borderRadius: '0.75rem', border: 'none', cursor: 'pointer' }}>
          Pay ₹100
        </button>
      </form>
    </div>
  );
}

export default Checkout;
