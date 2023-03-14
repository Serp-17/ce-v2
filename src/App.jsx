import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import 'aos/dist/aos.css';
import './css/style.css';
import AOS from 'aos';
import i18n from './i18n';
import useLocalStorage from './hooks/useLocalStorage';
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from './components/AppRouter';

function App() {
  const location = useLocation();
  const [language, setLanguage] = useLocalStorage('language', 'ru');
  const handleLanguageChange = (val) => {
    i18n.changeLanguage(val);
    setLanguage(val);
  };

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
