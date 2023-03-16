import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import 'aos/dist/aos.css';
import './css/style.css';
import AOS from 'aos';
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from './components/AppRouter';
import Header from "./partials/Header";

function App() {
  const location = useLocation();

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
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="grow">
          <AppRouter />
        </main>
      </div>
  );
}

export default App;
