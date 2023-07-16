import React from 'react';
import { Link } from 'react-router-dom';

export default function Carousal() {
  return (
    <>
      <div className='carousal'>
        <img src='images/briyani.jpg' alt='' />
        <img src='images/briyani2.jpg' alt='' />
        <img src='images/paneer.jpg' alt='' />
        <img src='images/soup.jpg' alt='' />
        <img src='images/noodles.jpg' alt='' />
        <div className='text-overlay'>
          <p className='title'>Are you Hungry?</p>
          <p className='des'>
            Explore a wide range of mouth-watering dishes and indulge in a
            culinary journey that delights your taste buds.<br/>From aromatic
            biryanis to delectable soups, we have something to satisfy every
            craving.<br/> Enjoy the perfect blend of flavors and textures, crafted
            with love and passion by our talented chefs.
          </p>
          <button className='btn'>
            <Link to='' className='text'>
              Order Now
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
