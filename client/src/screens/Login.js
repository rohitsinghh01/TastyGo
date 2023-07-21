import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = React.useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Navbar />

      <div className='form'>
        <h2 className='form-heading'>Welcome Back!</h2>
        <form action='' className='form-pg' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Email'
            className='input'
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type='password'
            placeholder='Password'
            className='input'
            onChange={handleChange}
            value={formData.password}
          />

          <div className='detail'>
            <a href='' className='form-link'>
              Forgot Password?
            </a>
            <Link to={'/register'} className='form-link'>
              Don't have an account?
            </Link>
          </div>
          <button className='btn lbtn'>Login</button>
        </form>

        <h2>OR</h2>
        <button className='btn gbtn'>Login With Google</button>
      </div>

      <Footer />
    </>
  );
}
