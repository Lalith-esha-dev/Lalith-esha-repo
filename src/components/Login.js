import React from 'react';

function Login({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '2rem',
        width: '90%',
        maxWidth: '400px',
        borderRadius: '15px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }}>
        <h2 style={{ 
          color: '#333', 
          marginBottom: '1.5rem',
          textAlign: 'center',
          fontSize: '1.8rem',
          fontWeight: '600'
        }}>Welcome Back</h2>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="email"
              placeholder="Email"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid #ddd',
                background: '#fff',
                color: '#333',
                outline: 'none',
                transition: 'all 0.3s ease',
                marginLeft: '-11px',
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="password"
              placeholder="Password"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid #ddd',
                background: '#fff',
                color: '#333',
                outline: 'none',
                transition: 'all 0.3s ease',
                marginLeft: '-11px',
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '1rem' 
          }}>
            <label style={{ display: 'flex', alignItems: 'center', color: '#666' }}>
              <input type="checkbox" style={{ marginRight: '0.5rem' }} />
              Remember me
            </label>
            <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>
              Forgot password?
            </a>
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginBottom: '1rem'
          }}>
            <button
              type="submit"
              style={{
                flex: 1,
                padding: '0.75rem',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
            >
              Login
            </button>

            <button
              type="button"
              onClick={onClose}
              style={{
                flex: 1,
                padding: '0.75rem',
                backgroundColor: '#6c757d',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
            >
              Cancel
            </button>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '1rem', color: '#666' }}>
            or continue with
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            {['Google', 'Facebook', 'Apple'].map((provider) => (
              <button
                key={provider}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e9ecef'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#f8f9fa'}
              >
                {provider}
              </button>
            ))}
          </div>

          <div style={{ textAlign: 'center', color: '#666' }}>
            New customer?{' '}
            <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>
              Create an account
            </a>
          </div>
        </form>

        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#666',
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Login; 