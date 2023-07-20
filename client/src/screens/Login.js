import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Login() {
  return (
    <>
    <Navbar/>

    <div className='form'>
      <form action="">
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Password'/>
        <input type="text" placeholder='location'/>
      </form>

    </div>



    <Footer/>
    </>
  )
}
