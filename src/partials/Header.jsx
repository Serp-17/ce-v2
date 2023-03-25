import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {ToastContainer} from 'react-toastify';
import ChangeLanguage from "../components/ChangeLanguage";
import {
  HOME_ROUTE,
  CHECK_ROUTE,
  ABOUT_ROUTE,
  CONTACT_ROUTE,
} from '../data/consts';

function Header() {
  const {t} = useTranslation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link to={HOME_ROUTE} className="block" aria-label="Cruip">
              <svg  className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M250 267 c0 -12 -8 -17 -32 -17 -30 0 -31 0 -13 -20 10 -11 24 -20 32 -20 7 0 13 -8 13 -17 0 -14 5 -12 27 10 l28 27 -28 27 c-22 22 -27 24 -27 10z"/>
                  <path d="M113 220 c-37 -45 -28 -71 30 -85 15 -4 27 -13 27 -21 0 -16 -36 -19 -45 -4 -8 14 -35 13 -35 -1 0 -13 47 -59 60 -59 5 0 21 11 35 24 19 18 26 33 23 53 -2 23 -10 30 -40 37 -21 5 -38 15 -38 23 0 16 24 17 50 1 30 -19 35 -2 9 31 -30 37 -48 38 -76 1z"/>
                  <path d="M21 96 l-24 -26 26 -24 c19 -18 27 -21 27 -11 0 10 11 15 32 15 l32 0 -22 20 c-12 11 -26 20 -31 20 -5 0 -11 7 -13 16 -2 13 -8 11 -27 -10z"/>
                </g>
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <ChangeLanguage />
              </li>
              <li>
                <Link to={`#about`}>
                  <span className="font-medium text-black hover:underline px-4 py-3 flex items-center transition duration-150 ease-in-out">
                    {t("About us")}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="#contact">
                  <span className="font-medium text-black hover:underline px-4 py-3 flex items-center transition duration-150 ease-in-out">
                    {t("Contact")}
                  </span>
                </Link>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <div className="flex">
              <ChangeLanguage />
              <button ref={trigger} className={`hamburger ml-3 ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <span className="sr-only">Menu</span>
                <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect y="4" width="24" height="2" rx="1" />
                  <rect y="11" width="24" height="2" rx="1" />
                  <rect y="18" width="24" height="2" rx="1" />
                </svg>
              </button>
            </div>


            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <Link to={ABOUT_ROUTE}>
                  <span className="font-medium text-black hover:underline px-4 py-3 flex items-center transition duration-150 ease-in-out">
                    {t("About us")}
                  </span>
                  </Link>
                </li>
                <li>
                  <Link to={CONTACT_ROUTE}>
                  <span className="font-medium text-black hover:underline px-4 py-3 flex items-center transition duration-150 ease-in-out">
                    {t("Contact")}
                  </span>
                  </Link>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
      <ToastContainer />
    </header>
  );
}

export default Header;
