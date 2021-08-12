//IMPORT PACKAGES
import { React, useContext } from 'react';
import { Link } from 'react-router-dom';

//IMPORT IMAGES
import logo from '../../images/logo.svg';

//IMPORT CONTEXTS
import { AuthContext } from '../../contexts/AuthContext.js';

const Navbar = () => {
	const { user } = useContext(AuthContext);

	const Logout = () => {
		localStorage.clear();
		window.location.href = '/';
	};

  return (
    <header class="site-header">
		  <div class="container">
				<div class="site-header-inner">
					<div class="brand reveal-scale-down">
						<h1 class="m-0"><a href="index.html"><img src={ logo } alt="Sketch" width="32"
									height="32"/></a></h1>
					</div><button id="header-nav-toggle" class="header-nav-toggle" aria-controls="primary-menu"
						aria-expanded="false"><span class="screen-reader">Menu</span> <span class="hamburger"><span
								class="hamburger-inner"></span></span></button>
					<nav id="header-nav" class="header-nav">
						<div class="header-nav-inner">
							<ul class="list-reset text-xxs header-nav-right">
								<li class="reveal-scale-down" data-reveal-delay="100"><Link
										to="/freelancers">{ user ? user.name : "FREELANCERS" }</Link></li>
							</ul>
							<ul class="list-reset header-nav-right">
								<li class="reveal-scale-down" data-reveal-delay="200">
									{ user ? <button class="button button-primary button-wide-mobile button-sm" onClick={Logout}>LOGOUT</button>
									: <Link class="button button-primary button-wide-mobile button-sm" to="/signup">CREATE AN ACCOUNT</Link>}
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</header>
  )
}

export default Navbar