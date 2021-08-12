import React from 'react';

import heroImg from '../../images/hero-image.png';

const Hero = () => {
  return (
    <section class="hero section center-content illustration-section-01">
      <div class="container-sm">
        <div class="hero-inner section-inner">
          <div class="hero-content">
            <h1 class="mt-0 mb-12 reveal-scale-down" data-reveal-delay="300">Pick any freelancer to create your personalized
            website.</h1>
            {/* <h1 class="mt-0 mb-12 reveal-scale-down" data-reveal-delay="300">Freedom on freedom baby!</h1> */}
            <div class="container-xs">
              <p class="m-0 mb-32 reveal-scale-down" data-reveal-delay="400">Our landing page template
                works on all devices, so you only have to set it up once, and get beautiful results
                forever.</p>
              <div class="reveal-scale-down" data-reveal-delay="500"><a
                  class="button button-primary button-wide-mobile" href="#">Pricing and plans</a>
              </div>
            </div>
          </div>
          <div class="hero-figure illustration-element-01 reveal-scale-down" data-reveal-delay="600"><img
              class="has-shadow" src={ heroImg } alt="Hero image"/></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
