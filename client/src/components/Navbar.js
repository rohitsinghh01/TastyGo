import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <>
      <nav className='main-nav'>
        <div className='logo'>
          <h2>
            <span>T</span>asty
            <span>G</span>o
          </h2>
        </div>

        <div className={showMenu ? 'menu-link mobile-menu-link' : 'menu-link'}>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>about</Link>
            </li>
            <li>
              <Link to='/'>services</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
        
          <div className='hamburger-menu'>
            <a onClick={() => setShowMenu(!showMenu)}>
              <GiHamburgerMenu />
            </a>
        </div>
      </nav>
    </>
  );
}
