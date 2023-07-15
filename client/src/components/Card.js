import React from 'react';

export default function Card() {
  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img
            src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt=''
          />
        </div>

        <div className='card-des'>
          <h2>Card Title</h2>
          <p>Description</p>
        </div>

        <div className='card-quantity'>
          <div className='quantity'>
            <select name='' id=''>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <select name='' id=''>
              <option value='half'>Half</option>
              <option value='full'>Full</option>
            </select>
          </div>

          <p>Total Price</p>
        </div>
      </div>
    </>
  );
}
