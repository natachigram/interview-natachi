import React from 'react';
import { Link } from 'react-router-dom';
import IMG_7864 from './assets/IMG_7864.png';
import IMG_78652 from './assets/IMG_78652.png';
import './Third.css';
const Third = () => {
  return (
    <div className='third'>
      <Link to='/fourth'>
        <div className='tap-right'></div>
      </Link>
      <Link to='/second'>
        <div className='tap-left'></div>
      </Link>
      <div className='third__header'>
        <div className='third__progressBar'>
          <div className='progress'></div>
          <div className='progress'></div>
          <div></div>
        </div>
        <p>Welcome!</p>
      </div>

      <div className='third__section'>
        <h3>02</h3>
        <img src={IMG_7864} alt='' />
        <div className='third__bottomText'>
          <h4>Explore new types of content and interests ✅</h4>
        </div>
      </div>
    </div>
  );
};

export default Third;
