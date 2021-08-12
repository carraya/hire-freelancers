import React from 'react'

import testimonialImg01 from '../../images/testimonial-image-01.jpg';
import testimonialImg02 from '../../images/testimonial-image-02.jpg';
import testimonialImg03 from '../../images/testimonial-image-03.jpg';

const Testimonials = () => {
  return (
    <section class="testimonial section has-bg-color invert-color center-content">
      <div class="container-xs">
        <div class="testimonial-inner section-inner">
          <div class="tiles-wrap carousel-items reveal-scale-down" data-autorotate="7000">
            <div class="tiles-item carousel-item">
              <div class="tiles-item-inner">
                <div class="testimonial-item-header mb-24">
                  <div class="testimonial-item-image"><img src={ testimonialImg01 }
                      alt="Testimonial image 01" width="88" height="88"/></div>
                </div>
                <div class="testimonial-item-content">
                  <p class="m-0 h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim
                    veniam.</p>
                </div>
              </div>
            </div>
            <div class="tiles-item carousel-item">
              <div class="tiles-item-inner">
                <div class="testimonial-item-header mb-24">
                  <div class="testimonial-item-image"><img src={ testimonialImg02 }
                      alt="Testimonial image 02" width="88" height="88"/></div>
                </div>
                <div class="testimonial-item-content">
                  <p class="m-0 h4">Lorem ipsum dolor sit amet, consectetur eiusmod tempor
                    incididunt ut labore et dolore magna aliqua enim adipiscing elit, sed do ad
                    minim veniam.</p>
                </div>
              </div>
            </div>
            <div class="tiles-item carousel-item">
              <div class="tiles-item-inner">
                <div class="testimonial-item-header mb-24">
                  <div class="testimonial-item-image"><img src={ testimonialImg03 }
                      alt="Testimonial image 03" width="88" height="88"/></div>
                </div>
                <div class="testimonial-item-content">
                  <p class="m-0 h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim
                    veniam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
