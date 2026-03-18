




import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import aizops from "../assets/images/azps.jpg";
import authService from "../services/authService";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
  const navigate = useNavigate();

  const scrollToTopWithDelay = () => {
    setTimeout(() => {
      try {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    }, 100);
  };

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = authService.isAuthenticated();
      setIsLoggedIn(authenticated);
      if (authenticated) {
        setUser(authService.getUser());
      }
    };
    
    checkAuth();
    
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
    scrollToTopWithDelay();
  };

  const handleAuthSuccess = (success) => {
    if (success) {
      setIsLoggedIn(true);
      setUser(authService.getUser());
    }
    setIsAuthModalOpen(false);
  };

  return (
    <>
      <nav className="bg-gradient-to-r fixed-top from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            
            <Link 
              to="/" 
              className="flex items-center gap-2" 
              onClick={scrollToTopWithDelay}
            >
              <img 
                src={aizops} 
                alt="Aizops logo" 
                style={{
                  width: '120px',
                  height: 'auto',
                  maxHeight: '50px',
                  objectFit: 'contain'
                }}
              />
            </Link>

            <div className="hidden lg:flex gap-6 font-medium">
              <Link to="/" className="hover:text-cyan-400" onClick={scrollToTopWithDelay}>Home</Link>
              <Link to="/aboutus" className="hover:text-cyan-400" onClick={scrollToTopWithDelay}>About</Link>
              <Link to="/pricing" className="hover:text-cyan-400" onClick={scrollToTopWithDelay}>Pricing</Link>
              <Link to="/blog" className="hover:text-cyan-400" onClick={scrollToTopWithDelay}>Blogs</Link>
              <Link to="/contact" className="hover:text-cyan-400" onClick={scrollToTopWithDelay}>Contact Us</Link>
            </div>

            <div className="hidden lg:flex flex-row gap-3 items-center">
              <button
                className="btn btn-outline-light px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-slate-900 transition"
                onClick={() => {
                  navigate('/buy-plans');
                  scrollToTopWithDelay();
                }}
              >
                Get Started
              </button>

              <div className="flex items-center gap-4">
                {isLoggedIn ? (
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">Hi, {user?.name?.split(' ')[0]}</span>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      scrollToTopWithDelay();
                    }}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>

            <button
              className="lg:hidden text-2xl focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>

          {open && (
            <div className="lg:hidden bg-slate-800 rounded-lg p-4 space-y-4 mt-2">
              <Link 
                to="/" 
                className="block py-2 hover:text-teal-400" 
                onClick={() => {
                  setOpen(false);
                  scrollToTopWithDelay();
                }}
              >
                Home
              </Link>
              <Link 
                to="/aboutus" 
                className="block py-2 hover:text-teal-400" 
                onClick={() => {
                  setOpen(false);
                  scrollToTopWithDelay();
                }}
              >
                About
              </Link>
              <Link 
                to="/pricing" 
                className="block py-2 hover:text-teal-400" 
                onClick={() => {
                  setOpen(false);
                  scrollToTopWithDelay();
                }}
              >
                Pricing
              </Link>
              <Link 
                to="/blog" 
                className="block py-2 hover:text-teal-400" 
                onClick={() => {
                  setOpen(false);
                  scrollToTopWithDelay();
                }}
              >
                Blogs
              </Link>
              <Link 
                to="/contact" 
                className="block py-2 hover:text-teal-400" 
                onClick={() => {
                  setOpen(false);
                  scrollToTopWithDelay();
                }}
              >
                Contact Us
              </Link>

              <div className="flex flex-col gap-2 pt-4">
                <button 
                  className="w-full py-2 border border-white rounded-lg hover:bg-white hover:text-slate-900 transition"
                  onClick={() => {
                    navigate('/buy-plans');
                    setOpen(false);
                    scrollToTopWithDelay();
                  }}
                >
                  Get Started
                </button>
                
                {isLoggedIn ? (
                  <>
                    <div className="text-cyan-400 text-center py-2">
                      Logged in as {user?.name?.split(' ')[0]}
                    </div>
                    <button 
                      className="w-full py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
                      onClick={() => {
                        handleLogout();
                        setOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button 
                    className="w-full py-2 bg-teal-600 rounded-lg hover:bg-teal-700 transition"
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setOpen(false);
                      scrollToTopWithDelay();
                    }}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

    
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={handleAuthSuccess}
        initialForm="login"
      />
    </>
  );
};

export default Navbar;