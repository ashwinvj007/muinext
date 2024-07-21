// src/pages/index.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default HomePage;
