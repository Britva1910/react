import './App.css';
import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/main-page/main-page';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <div className="page-content">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="about-us" element={<div>About us</div>} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
