import React from 'react'
// import Preloader from '../component/Preloader'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      {/* <Preloader/> */}
       <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3">
                <span className="cate">hello</span>
                <h2 className="title">welcome back</h2>
              </div>
              <form className="account-form">
                <div className="form-group">
                  <label htmlFor="email2">Email<span>*</span></label>
                  <input type="text" placeholder="Enter Your Email" id="email2" required />
                </div>
                <div className="form-group">
                  <label htmlFor="pass3">Password<span>*</span></label>
                  <input type="password" placeholder="Password" id="pass3" required />
                </div>
                <div className="form-group checkgroup">
                  <input type="checkbox" id="bal2" required defaultChecked />
                  <label htmlFor="bal2">remember password</label>
                  <a href="#0" className="forget-pass">Forget Password</a>
                </div>
                <div className="form-group text-center">
                  <Link to="/adddetails"><input type="submit" Value="log in" /></Link>
                </div>
              </form>
              <div className="option">
                Don't have an account? <Link to='/register'>sign up now</Link>
              </div>
              <div className="or"><span>Or</span></div>
              <ul className="social-icons">
                <li>
                  <a href="#0">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#0" className="active">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fab fa-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
