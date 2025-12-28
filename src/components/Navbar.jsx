import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaCode, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContextProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { id: 1, label: 'Home', to: '/' },
    { id: 2, label: 'About', to: 'about' },
    { id: 3, label: 'Services', to: 'services' },
    { id: 4, label: 'Portfolio', to: 'portfolio' },
    { id: 5, label: 'Contact', to: 'contact' },
  ]

  // close menu automatically whenever route changes (important on mobile)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);


  // add scroll listener and toggle scrolled class
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40); // adjust threshold if you want
    };

    onScroll(); // run once on mount (helps if page loads already scrolled)
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="header" className={`fixed top-0 left-0 w-full z-1000 ${isScrolled ? "py-2!" : "py-[15px]!"} transition-all ease-in-out duration-300 backdrop-blur-2xl bg-[var(--darker)] border-b border-[var(--border)] ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar flex justify-between items-center">
          <Link to={"/"} className="logo text-2xl md:text-3xl font-bold text-[var(--light)] flex items-center gap-1 md:gap-2 no-underline">
            <FaCode className='text-2xl md:text-3xl'/> Pradeep<span className='text-[var(--primary)]'>.</span>
          </Link>

          <div className="nav-right flex items-center gap-2 md:gap-10">
            <ul className={`nav-links flex items-center gap-8 lg:gap-10 ${isMenuOpen ? "active" : ""}`}>
              {links.map(link => (
                <li key={link.id}><NavLink className="text-[var(--light)] outline-none font-semibold text-md md:text-lg relative transition-colors duration-300 ease-in-out flex items-center h-full" to={link.to}>{link.label}</NavLink></li>
              )
              )}
            </ul>

            <button className="theme-toggle border-none text-[var(--light)] text-xl md:text-2xl w-[40px] h-[40px] cursor-pointer flex items-center justify-center rounded-full transition-all duration-300 ease-in-out m-0 p-0 hover:bg-[var(--border)] hover:text-[var(--primary)] hover:rotate-[30deg]" id="themeToggle" onClick={toggleTheme}>
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>

            <button className="menu-toggle flex md:hidden max-md:order-1 border-none text-[var(--light)] text-xl w-[40px] h-[40px] cursor-pointer flex items-center justify-center rounded-full transition-all duration-300 ease-in-out z-[1001] hover:bg-[var(--border)] hover:text-[var(--primary)]" id="menuToggle" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;