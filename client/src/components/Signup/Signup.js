//IMPORT PACKAGES
import { React, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

//IMPORT IMAGES
import logo from '../../images/logo.svg'

const Signup = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        console.log(user);
        await axios.post("http://localhost:5000/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
                <h1 class="m-0">Welcome. We exist to make entrepreneurship easier.</h1>
              </div>
              <div class="tiles-wrap">
                <div class="tiles-item">
                  <div class="tiles-item-inner">
                    <form onSubmit={ handleSubmit }>
                      <fieldset>
                        <div class="mb-12"><label class="form-label screen-reader" for="name">Full
                            name</label> <input id="name" class="form-input" type="name"
                            placeholder="Full name" ref={name} required/></div>
                        <div class="mb-12"><label class="form-label screen-reader"
                            for="email">Email</label> <input id="email" class="form-input"
                            type="email" placeholder="Email" ref={email} required/></div>
                        <div class="mb-12"><label class="form-label screen-reader"
                            for="password">Password</label> <input id="password"
                            class="form-input" type="password" placeholder="Password" ref={password} required/>
                        </div>
                        <div class="mb-12"><label class="form-label screen-reader"
                            for="confirmPassword">Confirm Password</label> <input id="confirmPassword"
                            class="form-input" type="password" placeholder="Confirm Password" ref={passwordAgain} required/>
                        </div>
                        <div class="mt-24 mb-32"><button
                            class="button button-primary button-block" type="submit">Sign up</button></div>
                      </fieldset>
                    </form>
                    <div class="signin-bottom has-top-divider">
                      <div class="pt-32 text-xs center-content text-color-low">Already have an
                        account? <Link class="func-link" to="/login">Login</Link></div>
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

export default Signup
