import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Sports from './components/sports';
import Electronics from './components/electronics';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToMain = (e) => {
    e.preventDefault();
    document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFooter = (e) => {
    e.preventDefault();
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <nav style={{
        backgroundColor: 'rgba(26, 26, 26, 0.8)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ 
          color: '#007bff', 
          fontSize: '1.8rem', 
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>DZ TECH</div>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: isSmallMobile ? 'column' : 'row',
          gap: isSmallMobile ? '1rem' : '2rem',
          margin: 0,
          padding: 0,
          alignItems: 'center'
        }}>
          <li>
            <a 
              href="/" 
              onClick={scrollToMain} 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '1.1rem',
                transition: 'color 0.3s ease',
                ':hover': { color: '#007bff' }
              }}
            >Shop</a>
          </li>
          <li style={{ position: 'relative' }}>
            <button
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              onBlur={() => setTimeout(() => setShowCategoryDropdown(false), 200)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.3s ease',
                ':hover': { color: '#007bff' }
              }}
            >
              Categories <span style={{ fontSize: '0.8rem' }}>▼</span>
            </button>
            {showCategoryDropdown && (
              <div style={{
                position: 'absolute',
                top: '120%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                width: '220px',
                zIndex: 1000,
                overflow: 'hidden'
              }}>
                {['Electronics', 'Sports', 'Fashion', 'Home & Living'].map((category) => (
                  <a
                    key={category}
                    href={`#${category.toLowerCase()}`}
                    onClick={(e) => scrollToSection(e, category.toLowerCase())}
                    style={{
                      display: 'block',
                      padding: '0.75rem 1.5rem',
                      color: '#333',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      borderBottom: '1px solid #f0f0f0',
                      ':hover': {
                        backgroundColor: '#f8f9fa',
                        paddingLeft: '2rem'
                      }
                    }}
                  >
                    {category}
                  </a>
                ))}
              </div>
            )}
          </li>
          <li>
            <a 
              href="/cart" 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.3s ease',
                ':hover': { color: '#007bff' }
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>🛒</span> Cart (0)
            </a>
          </li>
          <li>
            <button 
              onClick={() => setIsLoginOpen(true)}
              style={{
                padding: '0.6rem 1.5rem',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,123,255,0.3)',
                ':hover': {
                  backgroundColor: '#0056b3',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
      <section style={{
        minHeight: '90vh',
        background: `linear-gradient(rgba(26, 26, 26, 0.85), rgba(51, 51, 51, 0.85)), 
                    url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=100')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #007bff, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Welcome to DZ TECH
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            opacity: 0.9
          }}>
            Discover the latest in technology and innovation
          </p>
          <button 
            onClick={() => setIsLoginOpen(true)}
            style={{
              padding: '1rem 3rem',
              fontSize: '1.2rem',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'scale(1.05)'
              }
            }}>
            Get Started
          </button>
        </div>
      </section>
      <main style={{
        padding: '4rem 1rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '90%'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: '3rem',
          color: '#1a1a1a'
        }}>Featured Products</h2>
        <div style={{
          position: 'relative',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {[
            {
              src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1920&q=80",
              alt: "Premium Headphones",
              title: "Wireless Headphones",
              price: "$299.99"
            },
            {
              src: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=1920&q=80",
              alt: "Modern Laptop",
              title: "Ultra-Slim Laptop",
              price: "$1299.99"
            },
            {
              src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1920&q=80",
              alt: "Smart Watch",
              title: "Smart Watch Series X",
              price: "$399.99"
            }
          ].map((product, index) => (
            <div key={index} style={{
              position: 'relative',
              height: '400px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-10px)'
              }
            }}>
              <img 
                src={product.src}
                alt={product.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                color: 'white',
                textAlign: 'left'
              }}>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{product.title}</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{product.price}</p>
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '1rem',
                    transition: 'background-color 0.3s ease',
                    ':hover': {
                      backgroundColor: '#0056b3'
                    }
                  }}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: '6rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            marginBottom: '2rem',
            color: '#1a1a1a'
          }}>Explore Categories</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {['Electronics', 'Fashion', 'Home & Living', 'Sports'].map(category => {
              const imageUrls = {
                'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500',
                'Fashion': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500',
                'Home & Living': 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500',
                'Sports': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500'
              };

              return (
                <div key={category} style={{
                  position: 'relative',
                  height: '150px',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={imageUrls[category]}
                    alt={category}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1rem',
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white'
                  }}>
                    {category}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="sports">
          <Sports />
        </div>
        <div id="electronics">
          <Electronics />
        </div>
      </main>
      <footer style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: 'clamp(2rem, 5vw, 4rem)',
        marginTop: '5rem',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Stay Connected</h3>
        <p style={{ marginBottom: '1rem' }}>
          Subscribe to our newsletter for the latest products and deals!
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <input 
            type="email" 
            placeholder="Enter your email"
            style={{
              padding: '0.75rem',
              borderRadius: '4px',
              border: 'none',
              width: '250px'
            }}
          />
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Subscribe
          </button>
        </div>
        <button 
          onClick={scrollToTop}
          style={{
            padding: '0.75rem',
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.2rem',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ↑
        </button>
      </footer>
    </div>
  );
}

export default App;
