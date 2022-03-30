import React from 'react';
import { Link } from 'react-router-dom';
import IMG_7864 from './assets/IMG_7864.png';
import IMG_78652 from './assets/IMG_78652.png';
import './Second.css';
const Second = () => {
  return (
    <div className='second'>
      <Link to='/third'>
        <div className='tap'></div>
      </Link>
      <div className='second__header'>
        <div className='second__progressBar'>
          <div className='progress'></div>
          <div></div>
          <div></div>
        </div>
        <p>Welcome!</p>
      </div>

      <div className='second__section'>
        <h3>01</h3>
        <img src={IMG_78652} alt='' />
        <div className='second__bottomText'>
          <h4>Connect with your favorite people and brands 🔥</h4>
        </div>
      </div>
    </div>
  );
};

export default Second;
