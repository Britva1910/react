import './App.css';
import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import NotFoundPage from './components/pages/not-found-page/NotFoundPage';
import AboutUsPage from './components/pages/about-us-page/AboutUsPage';
import FormPage from './components/pages/form-page/FormPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/main-page/MainPage';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <div className="page-content">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="form" element={<FormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
