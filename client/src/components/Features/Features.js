import React from 'react';

import feature01 from '../../images/feature-tile-icon-01.svg';
import feature02 from '../../images/feature-tile-icon-02.svg';
import feature03 from '../../images/feature-tile-icon-03.svg';
import feature04 from '../../images/feature-tile-icon-04.svg';
import feature05 from '../../images/feature-tile-icon-05.svg';
import feature06 from '../../images/feature-tile-icon-06.svg';


const Features = () => {
  return (
    <section class="features-tiles section center-content illustration-section-02">
      <div class="container">
        <div class="features-tiles-inner section-inner">
          <div class="tiles-wrap">
            <div class="tiles-item reveal-scale-down" data-reveal-container=".tiles-wrap">
              <div class="tiles-item-inner">
                <div class="features-tiles-item-header">
                  <div class="features-tiles-item-image mb-16"><img
                      src={ feature01 } alt="Feature tile icon 01"/></div>
                </div>
                <div class="features-tiles-item-content">
                  <h4 class="mt-0 mb-8">Tailored Comments</h4>
                  <p class="m-0 text-sm">A pseudo-Latin text used in web design, layout, and
                    printing in place of things to emphasise layouts for previewing layouts and
                    visual mockups.</p>
                </div>
              </div>
            </div>
            <div class="tiles-item reveal-scale-down" data-reveal-container=".tiles-wrap"
              data-reveal-delay="100">
              <div class="tiles-item-inner">
                <div class="features-tiles-item-header">
                  <div class="features-tiles-item-image mb-16"><img
                      src={ feature02 } alt="Feature tile icon 02"/></div>
                </div>
                <div class="features-tiles-item-content">
                  <h4 class="mt-0 mb-8">Tailored Comments</h4>
                  <p class="m-0 text-sm">A pseudo-Latin text used in web design, layout, and
                    printing in place of things to emphasise layouts for previewing layouts and
                    visual mockups.</p>
                </div>
              </div>
            </div>
            <div class="tiles-item reveal-scale-down" data-reveal-container=".tiles-wrap"
              data-reveal-delay="200">
              <div class="tiles-item-inner">
                <div class="features-tiles-item-header">
                  <div class="features-tiles-item-image mb-16"><img
                      src={ feature03 } alt="Feature tile icon 03"/></div>
                </div>
                <div class="features-tiles-item-content">
                  <h4 class="mt-0 mb-8">Tailored Comments</h4>
                  <p class="m-0 text-sm">A pseudo-Latin text used in web design, layout, and
                    printing in place of things to emphasise layouts for previewing layouts and
                    visual mockups.</p>
                </div>
              </div>
            </div>
            <div class="tiles-item reveal-scale-down" data-reveal-container=".tiles-wrap"
              data-reveal-delay="300">
              <div class="tiles-item-inner">
                <div class="features-tiles-item-header">
                  <div class="features-tiles-item-image mb-16"><img
                      src={ feature04 } alt="Feature tile icon 04"/></div>
                </div>
                <div class="features-tiles-item-content">
                  <h4 class="mt-0 mb-8">Tailored Comments</h4>
                  <p class="m-0 text-sm">A pseudo-Latin text used in web design, layout, and
                    printing in place of things to emphasise layouts for previewing layouts and
                    visual mockups.</p>
                </div>
              </div>
            </div>
            <div class="tiles-item reveal-scale-down" data-reveal-container=".tiles-wrap"
              data-reveal-delay="400">
              <div class="tiles-item-inner">
                <div class="features-tiles-item-header">
                  <div class="features-tiles-item-image mb-16"><img
                      src={ feature05 } alt="Feature tile icon 05"/></div>
                </div>
                <div class="features-tiles-item-content">
                  <h4 class="mt-0 mb-8">Tailored Comments</h4>
                  <p class="m-0 text-sm">A pseudo-Latin text used in web design, layout, and
                    printing in place of things to emphasise layouts for previewing layouts and
                    visual mockups.</p>
                </div>
              </div>
            </div>
            <div class="tiles-item reveal-scale-down" data-reveal-container=".tiles-wrap"
              data-reveal-delay="500">
              <div class="tiles-item-inner">
                <div class="features-tiles-item-header">
                  <div class="features-tiles-item-image mb-16"><img
                      src={ feature06 } alt="Feature tile icon 06"/></div>
                </div>
                <div class="features-tiles-item-content">
                  <h4 class="mt-0 mb-8">Tailored Comments</h4>
                  <p class="m-0 text-sm">A pseudo-Latin text used in web design, layout, and
                    printing in place of things to emphasise layouts for previewing layouts and
                    visual mockups.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
