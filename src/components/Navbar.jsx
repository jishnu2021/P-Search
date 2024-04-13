import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/navbar.css'
const Navbar = () => {

    const namechange=()=>{
        document.title='CloudFold'
      }
      const titleFeature=()=>{
        document.title='Features'
      }
      const titlePricing=()=>{
        document.title='Pricing'
      }
      const loginchange=()=>{
        document.title="Login"
      }
      const titleIF=()=>{
        document.title="Invite Friends"
      }
      const signupchange=()=>{
        document.title="Create Account"
      }

  return (
    <>
      <nav className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: 'white' }} onClick={namechange}>Search</h1>
        </Link>
      </div>

      <div className="spacer"></div>
      <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkBtn">
          <i className="fa fa-bars" />
        </label>
        <ul className="list">
          <b>
          <li>
            <Link to="/stats" onClick={titleFeature}>Features</Link>
          </li>
          </b>
         <b> <li>
            <Link to="/create" onClick={titlePricing}>Pricing</Link>
          </li></b>
  <b>
  <li>
            <Link to="/create" onClick={titleIF}>Invite Friends</Link>
          </li>
  </b>
          
        </ul>
      </div>
<div className="panel">
<ul className='detail'>
              <li className="bttn">
                <Link onClick={signupchange} to="/signup">
                  <button>Signup</button>
                </Link>
              </li>
              <li>
                <Link  className="bttn" onClick={loginchange} to="/login">
                  <button>Login</button>
                </Link>
              </li>
        </ul>
</div>
    </nav>
    </>
  )
}

export default Navbar
