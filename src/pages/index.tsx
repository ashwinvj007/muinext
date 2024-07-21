// src/pages/index.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import HomePageContent from '../components/home';
// import LoginForm from '../components/LoginForm';
import HomePageContent from '../components/home';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HomePageContent />
      <Footer />
    </div>
  );
};

export default HomePage;
