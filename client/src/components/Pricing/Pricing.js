import React from 'react'

const Pricing = () => {
  return (
    <section class="pricing section">
      <div class="container">
        <div class="pricing-inner section-inner has-top-divider">
          <div class="section-header center-content">
            <div class="container-xs">
              <h2 class="mt-0 mb-16">Simple Pricing</h2>
              <p class="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum — velit esse cillum.</p>
            </div>
          </div>
          <div class="pricing-switcher center-content"><label class="form-switch"><input type="checkbox"
                checked="checked"/> <span class="form-switch-icon"></span> <span>Billed
                Monthly</span> <span>Billed Annually</span></label></div>
          <div class="tiles-wrap has-bg-color illustration-section-05">
            <div class="tiles-item reveal-scale-down">
              <div class="tiles-item-inner has-shadow">
                <div class="pricing-item-content">
                  <div class="pricing-item-header mb-24">
                    <div class="pricing-item-title text-xs text-color-high fw-500 pb-4">Premium
                    </div>
                    <div class="pricing-item-price" data-price-output='{
                                              "0": ["$", "55", "monthly"],
                                              "1": ["$", "47", "annually"]
                                          }'><span class="pricing-item-price-currency h2"></span><span
                        class="pricing-item-price-amount h1"></span></div>
                    <div class="text-xs text-color-low">/per month, billed <span
                        class="pricing-item-price-after"></span></div>
                  </div>
                  <div class="pricing-item-features mb-40">
                    <div
                      class="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                      What’s included</div>
                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                      <li class="is-checked">Excepteur sint occaecat velit</li>
                      <li class="is-checked">Excepteur sint occaecat velit</li>
                      <li class="is-checked">Excepteur sint occaecat velit</li>
                      <li>Excepteur sint occaecat velit</li>
                      <li>Excepteur sint occaecat velit</li>
                    </ul>
                  </div>
                </div>
                <div class="pricing-item-cta mb-8"><a class="button button-primary button-block"
                    href="#">Free 14-day trial</a></div>
              </div>
            </div>
            <div class="tiles-item reveal-scale-down" data-reveal-delay="100">
              <div class="tiles-item-inner has-shadow">
                <div class="pricing-item-content">
                  <div class="pricing-item-header mb-24">
                    <div class="pricing-item-title text-xs text-color-high fw-500 pb-4">Business
                    </div>
                    <div class="pricing-item-price" data-price-output='{
                                              "0": ["$", "75", "monthly"],
                                              "1": ["$", "67", "annually"]
                                          }'><span class="pricing-item-price-currency h2"></span><span
                        class="pricing-item-price-amount h1"></span></div>
                    <div class="text-xs text-color-low">/per month, billed <span
                        class="pricing-item-price-after"></span></div>
                  </div>
                  <div class="pricing-item-features mb-40">
                    <div
                      class="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                      What’s included</div>
                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                      <li class="is-checked">Excepteur sint occaecat velit</li>
                      <li class="is-checked">Excepteur sint occaecat velit</li>
                      <li class="is-checked">Excepteur sint occaecat velit</li>
                      <li class="is-checked">Excepteur sint occaecat velit</li>
                      <li>Excepteur sint occaecat velit</li>
                    </ul>
                  </div>
                </div>
                <div class="pricing-item-cta mb-8"><a class="button button-primary button-block"
                    href="#">Free 14-day trial</a></div>
              </div>
            </div>
            <div class="tiles-item reveal-scale-down" data-reveal-delay="200">
              <div class="tiles-item-inner has-shadow">
                <div class="pricing-item-content">
                  <div class="pricing-item-header mb-24">
                    <div class="pricing-item-title text-xs text-color-high fw-500 pb-4">
                      Enterprise</div>
                    <div class="pricing-item-price" data-price-output='{
                                              "0": ["$", "105", "monthly"],
                                              "1": ["$", "97", "annually"]
                                          }'><span class="pricing-item-price-currency h2"></span><span
                        class="pricing-item-price-amount h1"></span></div>
                    <div class="text-xs text-color-low">/per month, billed <span
                        class="pricing-item-price-after"></span></div>
                  </div>
                  <div class="pricing-item-features mb-40">
                    <div
                      class="pricing-item-features-title fw-500 text-xs text-color-high mb-24">
                      What’s included</div>
                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                      <li class="is-checked">Excepteur sint occaecat velit</li>
                      <li class="is-checked">Excepteur sint occaecat velit</li>
                      <li class="is-checked">Excepteur sint occaecat velit</li>
                      <li class="is-checked">Excepteur sint occaecat velit</li>
                      <li class="is-checked">Excepteur sint occaecat velit</li>
                    </ul>
                  </div>
                </div>
                <div class="pricing-item-cta mb-8"><a class="button button-primary button-block"
                    href="#">Free 14-day trial</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
