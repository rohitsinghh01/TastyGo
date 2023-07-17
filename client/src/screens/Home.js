import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousal from '../components/Carousal';

export default function Home() {
  return (
    <div className='body'>
      <Navbar />
      <Carousal />
      <div className='middle-container'>
        <h1>Menu</h1>
        <div className='menu'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}
