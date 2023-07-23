import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter Valid Credentials');
      setFormData({ ...formData, password: '' });
    } else if(json.success) {
      localStorage.setItem('authToken',json.authToken)
      console.log(localStorage.getItem('authToken'))
      navigate('/');
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Navbar />

      <div className='form'>
        <h2 className='form-heading'>Welcome Back!</h2>
        <form
          action=''
          className='form-pg'
          onSubmit={handleSubmit}
          autoComplete='off'
        >
          <input
            type='text'
            placeholder='Email'
            className='input'
            name='email'
            onChange={handleChange}
            value={formData.email}
            autoFocus
          />
          <input
            type='password'
            placeholder='Password'
            className='input'
            name='password'
            onChange={handleChange}
            value={formData.password}
            autoFocus
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
