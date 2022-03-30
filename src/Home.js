import React from 'react';
import { Link } from 'react-router-dom';
import Arrow2 from './assets/Arrow2.svg';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__welcomeText'>
        <h1>Welcome to Instagram!</h1>
        <p>Here's a quick run-through on how to use our app.</p>
      </div>

      <Link to='/second' className='home__nextBtn'>
        <span>Tap to continue</span>
        <img src={Arrow2} alt='arrow' />
      </Link>
    </div>
  );
};

export default Home;
