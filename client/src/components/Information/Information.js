import React from 'react'

import featuresSplitImage from '../../images/features-split-image.svg';
import featuresSplitTop01 from '../../images/features-split-top-01.png';
import featuresSplitTop02 from '../../images/features-split-top-02.png';
import featuresSplitTop03 from '../../images/features-split-top-03.png';


const Information = () => {
  return (
    <section class="features-split section illustration-section-03">
      <div class="container">
        <div class="features-split-inner section-inner has-top-divider">
          <div class="section-header center-content">
            <div class="container-xs">
              <h2 class="m-0">Lorem ipsum is placeholder text commonly used in the graphic and print
                industries.</h2>
            </div>
          </div>
          <div class="split-wrap invert-mobile">
            <div class="split-item">
              <div class="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item">
                <h3 class="mt-0 mb-16">Do collaboration the right way</h3>
                <p class="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum — velit esse cillum dolore eu fugiat
                  nulla pariatur sint occaecat cupidatat.</p>
              </div>
              <div class="split-item-image illustration-element-02 reveal-scale-down"
                data-reveal-container=".split-item"><img src={ featuresSplitImage }
                  alt="Features split image 01"/>
                <div
                  style={{ position:"absolute", width:"123.49%", maxWidth:"123.49%", top:"-8.33%", left:"-11.55%" }}>
                  <img src={ featuresSplitTop01 } alt="Features split top 01"
                    width="652" height="495"/></div>
              </div>
            </div>
            <div class="split-item">
              <div class="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item">
                <h3 class="mt-0 mb-16">Do collaboration the right way</h3>
                <p class="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum — velit esse cillum dolore eu fugiat
                  nulla pariatur sint occaecat cupidatat.</p>
              </div>
              <div class="split-item-image illustration-element-03 reveal-scale-down"
                data-reveal-container=".split-item"><img src={ featuresSplitImage }
                  alt="Features split image 02"/>
                <div
                  style={{ position:"absolute", width:"113.26%",maxWidth:"113.26%",top:"-8.84%",left:"-3.41%" }}>
                  <img src={ featuresSplitTop02 } alt="Features split top 02"
                    width="654" height="521"/></div>
              </div>
            </div>
            <div class="split-item">
              <div class="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item">
                <h3 class="mt-0 mb-16">Do collaboration the right way</h3>
                <p class="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum — velit esse cillum dolore eu fugiat
                  nulla pariatur sint occaecat cupidatat.</p>
              </div>
              <div class="split-item-image illustration-element-04 reveal-scale-down"
                data-reveal-container=".split-item"><img src={ featuresSplitImage }
                  alt="Features split image 03"/>
                <div
                  style={{ position:"absolute", width:"122.73%", maxWidth:"122.73%", top:"-15.4%", left:"-9.28%" }}>
                  <img src={ featuresSplitTop03 } alt="Features split top 03"
                    width="648" height="531"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information
