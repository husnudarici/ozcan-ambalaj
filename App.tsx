import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './features/home/Home';
import About from './features/about/About';
import Products from './features/products/Products';
import References from './features/references/References';
import Contact from './features/contact/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hakkimizda" element={<About />} />
          <Route path="urunler" element={<Products />} />
          <Route path="referanslar" element={<References />} />
          <Route path="iletisim" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;