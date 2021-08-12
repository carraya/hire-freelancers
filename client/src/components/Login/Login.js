//IMPORT PACKAGES
import { React, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

//IMPORT IMAGES
import logo from '../../images/logo.svg'

//IMPORT API
import { loginCall } from '../../api/authAPI.js';

//IMPORT CONTEXTS
import { AuthContext } from '../../contexts/AuthContext.js';

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div class="body-wrap">
      <header class="site-header">
        <div class="container">
          <div class="site-header-inner">
            <div class="brand">
              <h1 class="m-0"><Link to="/"><img src={ logo } alt="Sketch" width="32"
                    height="32"/></Link></h1>
            </div>
          </div>
        </div>
      </header>
      <main class="site-content">
        <section class="signin section illustration-section-01">
          <div class="container-xs">
            <div class="signin-inner section-inner">
              <div class="section-header center-content">
                <h1 class="m-0">Welcome back. We exist to make entrepreneurship easier.</h1>
              </div>
              <div class="tiles-wrap">
                <div class="tiles-item">
                  <div class="tiles-item-inner">
                    <form onSubmit={handleSubmit}>
                      <fieldset>
                        <div class="mb-12"><label class="form-label screen-reader"
                            for="email">Email</label> <input id="email" class="form-input"
                            type="email" placeholder="Email" ref={email} required/></div>
                        <div class="mb-12"><label class="form-label screen-reader"
                            for="password">Password</label> <input id="password"
                            class="form-input" type="password" placeholder="Password" ref={password} required/>
                        </div>
                        <div class="mt-24 mb-32"><button
                            class="button button-primary button-block" type="submit">Log in</button></div>
                        <div class="signin-footer mb-32"><label class="form-checkbox"><input
                              type="checkbox" id="remember"/>Remember me</label> <a
                            class="func-link text-xs" href="#">Forgot password?</a></div>
                      </fieldset>
                    </form>
                    <div class="signin-bottom has-top-divider">
                      <div class="pt-32 text-xs center-content text-color-low">Don't you have an
                        account? <Link class="func-link" to="/signup">Sign up</Link></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Login
