import React from 'react';
import { Link } from 'react-router-dom';
import IMG_78662 from './assets/IMG_78662.png';
import './Fourth.css';
const Fourth = () => {
  return (
    <div className='fourth'>
      <Link to='/third'>
        <div className='tap-left'></div>
      </Link>
      <div className='fourth__header'>
        <div className='fourth__progressBar'>
          <div className='progress'></div>
          <div className='progress'></div>
          <div className='progress'></div>
        </div>
        <p>Welcome!</p>
      </div>

      <div className='fourth__section'>
        <h3>03</h3>
        <img src={IMG_78662} alt='' />
        <div className='fourth__bottomText'>
          <h4>Find new creators and watch funny videos 😂</h4>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
