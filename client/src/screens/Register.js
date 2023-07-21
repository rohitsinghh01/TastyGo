import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate()
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    location: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        location: formData.location,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter Valid Credentials');
    }
    else{
      navigate('/login');
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Navbar />

      <div className='form2'>
        <h2 className='form-heading2'>Signup Now!</h2>
        <form
          action=''
          className='form-pg2'
          onSubmit={handleSubmit}
          autoComplete='off'
        >
          <input
            type='text'
            placeholder='Name'
            className='input'
            name='name'
            onChange={handleChange}
            autoFocus
            value={formData.name}
          />
          <input
            type='text'
            placeholder='Email'
            className='input'
            name='email'
            onChange={handleChange}
            autoFocus
            value={formData.email}
          />
          <input
            type='password'
            placeholder='Password'
            className='input'
            name='password'
            onChange={handleChange}
            autoFocus
            value={formData.password}
          />
          <input
            type='text'
            placeholder='Location'
            className='input'
            name='location'
            onChange={handleChange}
            autoFocus
            value={formData.location}
          />

          <div className='detail'>
            <a href='' className='form-link'>
              Forgot Password?
            </a>
            <Link to={'/login'} className='form-link'>
              Already registered?
            </Link>
          </div>
          <button className='btn lbtn'>Login</button>
        </form>

        <div className='btns'>
          <h2>OR</h2>
          <button className='btn gbtn'>Login With Google</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
