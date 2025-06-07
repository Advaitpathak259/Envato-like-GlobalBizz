import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import BackgroundMusic from './components/BackgroundMusic';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BackgroundMusic/>
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;