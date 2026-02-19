import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Contacts from './pages/Contacts/Contacts';
import './styles/globals.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  // Проверяем, есть ли сохраненный путь для редиректа
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirect');
    if (redirectPath && redirectPath !== '/') {
      sessionStorage.removeItem('redirect');
      // Здесь можно добавить логику для обработки сохраненного пути
      console.log('Should redirect to:', redirectPath);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function AppWrapper() {

  return (
    <Router basename="/ams">
      <App />
    </Router>
  );
}

export default AppWrapper;