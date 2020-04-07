import React from 'react';
import '../scss/_header.scss'
import { Link } from 'react-router-dom';

function Header(){

  return(
    <div className='header'>
      <Link to="/feedback"> Submit Feedback</Link>
      <Link to="/adminview"> Admin View</Link>
      <Link to="/employeehome"> Employee Home </Link>

      <div className='theoremLogoWrapper'>
        <img src="https://theoremadvertising.com/wp-content/uploads/2019/04/cropped-logo-1.png" alt="theorem logo"/>
      </div>

      <div className='headerTitleWrapper'>
        <h1 className='headerTitle'>Human Resources</h1>
      </div>

      <div className='headerUserInfo'>
        <p>User Name</p>
        <p>LogIn/Out</p>
      </div>
    </div>
  )
}

export default Header
