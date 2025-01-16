import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Dashboard() {
    return (
    
        <AdminLayout>
          <main className="main">

        {/* Hero Section  */}
        <section id="hero" className="hero section dark-background">

          <img src="assets/img/hero-bg.jpg" alt=""/>

          <div className="container d-flex flex-column align-items-center text-center">
            <h2>Welcome to Perfect Coaching</h2>
            <p>JOIN US & JOIN WITH DIFFERENCE & BE PERFECT</p>
            <div>
              <a href="https://fb.watch/x3ilDnrM8-/" className="glightbox pulsating-play-btn"></a>
            </div>
          </div>

        </section>
        {/* /Hero Section  */}

        {/* About Section  */}
        <section id="about" className="about section">

          {/* Section Title  */}
          <div className="container section-title">
            <h2>About Us</h2>
            <p></p>
          </div>
          {/* End Section Title  */}

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-6 content">
                <p> Founded in 2008, our coaching center has been a beacon of educational excellence for students across all grade levels. From the very beginning, our mission has been to provide high-quality education with the help of our highly reputed and experienced teachers.
                    Our faculty members are not only experts in their respective fields but also passionate about nurturing the potential of each student. Over the years, thousands of students have trusted us with their education, achieving remarkable success in academics and beyond.
                    We take pride in our holistic approach to learning, fostering a supportive environment where students can thrive. Whether it's preparing for exams, enhancing skills, or building a strong educational foundation, our coaching center remains committed to empowering students for a brighter future.
                    Join us and be a part of our growing community dedicated to academic excellence and lifelong learning.</p>
                {/* <ul>
                  <li><i className="bi bi-check2-circle"></i> <span>Regular Coaching for class 5 - 12.</span></li>
                  <li><i className="bi bi-check2-circle"></i> <span>PEC Special Coaching & Model Test.</span></li>
                  <li><i className="bi bi-check2-circle"></i> <span>JSC Special Coaching & Model Test.</span></li>
                  <li><i className="bi bi-check2-circle"></i> <span>SSC Special Coaching & Model Test.</span></li>
                  <li><i className="bi bi-check2-circle"></i> <span>HSC Special Coaching & Model Test.</span></li>
                  <li><i className="bi bi-check2-circle"></i> <span>Spoken English.</span></li>
                </ul> */}
              </div>

              <div className="col-lg-6">
                {/* <p>  ......................................................... </p> */}
                <a href="#" className="read-more"><span> Read More </span><i className="bi bi-arrow-right"></i></a>
              </div>

            </div>

          </div>

        </section>
        {/* /About Section  */}

        {/* Services Section  */}
        <section id="services" className="services section">

          {/* Section Title  */}
          <div className="container section-title">
            <h2>Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          {/* End Section Title  */}

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-4 col-md-6">
                <div className="service-item  position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Spoken English</h3>
                  </a>
                  <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                </div>
              </div>
              {/* End Service Item  */}

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Regular Coaching for class 5 - 12</h3>
                  </a>
                  <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                </div>
              </div>
              {/* End Service Item  */}

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>PEC Special Coaching & Model Test</h3>
                  </a>
                  <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                </div>
              </div>
              {/* End Service Item  */}

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>JSC Special Coaching & Model Test</h3>
                  </a>
                  <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>
              {/* End Service Item  */}

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>SSC Special Coaching & Model Test</h3>
                  </a>
                  <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>
              {/* End Service Item  */}

              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>HSC Special Coaching & Model Test</h3>
                  </a>
                  <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>
              {/* End Service Item  */}

            </div>

          </div>

        </section>
        {/* /Services Section  */}

        {/* Call To Action Section  */}
        <section id="call-to-action" className="call-to-action section dark-background">

          <img src="assets/img/cta-bg.jpg" alt=""/>

          <div className="container">

            <div className="row">
              <div className="col-xl-9 text-center text-xl-start">
                <h3>Call To Action</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="col-xl-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="#">Notice</a>
              </div>
            </div>

          </div>

        </section>
        {/* /Call To Action Section  */}

        {/* Features Section  */}
        <section id="features" className="features section">

          <div className="container">

            <div className="row gy-4">

              <div className="features-image col-lg-6 order-lg-2"><img src="assets/img/features-bg.jpg" alt=""/></div>

              <div className="col-lg-6 order-lg-1">

                <div className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0">
                  <i className="bi bi-archive flex-shrink-0"></i>
                  <div>
                    <h4>কনসেপ্ট বেইজড ক্লাস</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>
                {/* End Features Item */}

                <div className="features-item d-flex mt-5 ps-0 ps-lg-3">
                  <i className="bi bi-basket flex-shrink-0"></i>
                  <div>
                    <h4>অফলাইন/অনলাইন প্রোগ্রাম</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                {/* End Features Item */}

                <div className="features-item d-flex mt-5 ps-0 ps-lg-3">
                  <i className="bi bi-broadcast flex-shrink-0"></i>
                  <div>
                    <h4>Auto SMS রেজাল্ট </h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>
                {/* End Features Item */}

                <div className="features-item d-flex mt-5 ps-0 ps-lg-3">
                  <i className="bi bi-camera-reels flex-shrink-0"></i>
                  <div>
                    <h4>মানসম্মত স্টাডি ম্যাটেরিয়ালস</h4>
                    <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                  </div>
                </div>
                {/* End Features Item */}

              </div>

            </div>

          </div>

        </section>
        {/* /Features Section  */}

        {/* Clients Section  */}
        <section id="clients" className="clients section">

          <div className="container">

            <div className="row g-0 clients-wrap">

              <div className="col-xl-3 col-md-4 client-logo">
                <img src="assets/img/clients/client-1.png" className="img-fluid" alt=""/>
              </div>
              {/* End Client Item  */}

              <div className="col-xl-3 col-md-4 client-logo">
                <img src="assets/img/clients/client-2.png" className="img-fluid" alt=""/>
              </div>
              {/* End Client Item  */}

              <div className="col-xl-3 col-md-4 client-logo">
                <img src="assets/img/clients/client-3.png" className="img-fluid" alt=""/>
              </div>
              {/* End Client Item  */}

              <div className="col-xl-3 col-md-4 client-logo">
                <img src="assets/img/clients/client-4.png" className="img-fluid" alt=""/>
              </div>
              {/* End Client Item  */}

              <div className="col-xl-3 col-md-4 client-logo">
                <img src="assets/img/clients/client-5.png" className="img-fluid" alt=""/>
              </div>
              {/* End Client Item  */}

              <div className="col-xl-3 col-md-4 client-logo">
                <img src="assets/img/clients/client-6.png" className="img-fluid" alt=""/>
              </div>
              {/* End Client Item  */}

              <div className="col-xl-3 col-md-4 client-logo">
                <img src="assets/img/clients/client-7.png" className="img-fluid" alt=""/>
              </div>
              {/* End Client Item  */}

              <div className="col-xl-3 col-md-4 client-logo">
                <img src="assets/img/clients/client-8.png" className="img-fluid" alt=""/>
              </div>
              {/* End Client Item  */}

            </div>

          </div>

        </section>
        {/* /Clients Section  */}

        {/* Stats Section  */}
        <section id="stats" className="stats section dark-background">

          <img src="assets/img/stats-bg.jpg" alt=""/>

          <div className="container position-relative">

            <div className="subheading">
              <h3>What we have achieved so far</h3>
              <p>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
            </div>

            <div className="row gy-4">

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Students</p>
                  <span>1200+</span>
                </div>
              </div>
              {/* End Stats Item  */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Courses</p>
                  <span>20+</span>
                </div>
              </div>
              {/* End Stats Item  */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Events</p>
                  <span>150+</span>
                </div>
              </div>
              {/* End Stats Item  */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Trainers</p>
                  <span>10+</span>
                </div>
              </div>
              {/* End Stats Item  */}

            </div>

          </div>

        </section>
        {/* /Stats Section  */}

        {/* Portfolio Section  */}
        <section id="portfolio" className="portfolio section">

          {/* Section Title  */}
          <div className="container section-title">
            <h2>Portfolio</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          {/* End Section Title  */}

          <div className="container">

            <div className="isotope-layout">

              <ul className="portfolio-filters isotope-filters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Card</li>
                <li data-filter=".filter-branding">Web</li>
              </ul>
              {/* End Portfolio Filters  */}

              <div className="row gy-4 isotope-container">

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" title="App 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                {/* End Portfolio Item  */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Product 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" title="Product 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                {/* End Portfolio Item  */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Branding 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg" title="Branding 1" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                {/* End Portfolio Item  */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg" title="App 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                {/* End Portfolio Item  */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Product 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg" title="Product 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                {/* End Portfolio Item  */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Branding 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg" title="Branding 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                {/* End Portfolio Item  */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg" title="App 3" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                {/* End Portfolio Item  */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Product 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg" title="Product 3" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                {/* End Portfolio Item  */}

                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg" className="img-fluid" alt=""/>
                  <div className="portfolio-info">
                    <h4>Branding 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg" title="Branding 2" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                  </div>
                </div>
                {/* End Portfolio Item  */}

              </div>
              {/* End Portfolio Container  */}

            </div>

          </div>

        </section>
        {/* /Portfolio Section  */}

        {/* Pricing Section  */}
        {/* <section id="pricing" className="pricing section light-background">

          
          <div className="container section-title">
            <h2>Pricing</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-4 col-md-6">
                <div className="pricing-item">
                  <h3>Free</h3>
                  <h4><sup>$</sup>0<span> / month</span></h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li className="na">Pharetra massa</li>
                    <li className="na">Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">Buy Now</a>
                  </div>
                </div>
              </div>
              

              <div className="col-lg-4 col-md-6">
                <div className="pricing-item recommended">
                  <span className="recommended-badge">Recommended</span>
                  <h3>Business</h3>
                  <h4><sup>$</sup>19<span> / month</span></h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li className="na">Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">Buy Now</a>
                  </div>
                </div>
              </div>
              

              <div className="col-lg-4 col-md-6">
                <div className="pricing-item">
                  <h3>Developer</h3>
                  <h4><sup>$</sup>29<span> / month</span></h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">Buy Now</a>
                  </div>
                </div>
              </div>
            

            </div>

          </div>

        </section> */}
        {/* /Pricing Section  */}

        {/* Faq Section  */}
        <section id="faq" className="faq section">

          <div className="container-fluid">

            <div className="row gy-4">

              <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">

                <div className="content px-xl-5">
                  <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>

                <div className="faq-container px-xl-5">

                  <div className="faq-item faq-active">
                    <i className="faq-icon bi bi-question-circle"></i>
                    <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                    <div className="faq-content">
                      <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item */}

                  <div className="faq-item">
                    <i className="faq-icon bi bi-question-circle"></i>
                    <h3>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h3>
                    <div className="faq-content">
                      <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item */}

                  <div className="faq-item">
                    <i className="faq-icon bi bi-question-circle"></i>
                    <h3>Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
                    <div className="faq-content">
                      <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item */}

                </div>

              </div>

              <div className="col-lg-5 order-1 order-lg-2">
                <img src="assets/img/faq.jpg" className="img-fluid" alt=""/>
              </div>
            </div>

          </div>

        </section>
        {/* /Faq Section  */}

        {/* Recent Posts Section  */}
        <section id="recent-posts" className="recent-posts section">

          {/* Section Title  */}
          <div className="container section-title">
            <h2>Our Trainers</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          {/* End Section Title  */}

          <div className="container">

            <div className="row gy-4">

              <div className="col-xl-4 col-md-6">
                <article>

                  <div className="post-img">
                    <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid"/>
                  </div>

                  <p className="post-category">Politics</p>

                  <h2 className="title">
                    <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
                  </h2>

                  <div className="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                    <div className="post-meta">
                      <p className="post-author">Maria Doe</p>
                      <p className="post-date">
                        <time datetime="2022-01-01">Jan 1, 2022</time>
                      </p>
                    </div>
                  </div>

                </article>
              </div>
              {/* End post list item  */}

              <div className="col-xl-4 col-md-6">
                <article>

                  <div className="post-img">
                    <img src="assets/img/blog/blog-2.jpg" alt="" className="img-fluid"/>
                  </div>

                  <p className="post-category">Sports</p>

                  <h2 className="title">
                    <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
                  </h2>

                  <div className="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author-2.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                    <div className="post-meta">
                      <p className="post-author">Allisa Mayer</p>
                      <p className="post-date">
                        <time datetime="2022-01-01">Jun 5, 2022</time>
                      </p>
                    </div>
                  </div>

                </article>
              </div>
              {/* End post list item  */}

              <div className="col-xl-4 col-md-6">
                <article>

                  <div className="post-img">
                    <img src="assets/img/blog/blog-3.jpg" alt="" className="img-fluid"/>
                  </div>

                  <p className="post-category">Entertainment</p>

                  <h2 className="title">
                    <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
                  </h2>

                  <div className="d-flex align-items-center">
                    <img src="assets/img/blog/blog-author-3.jpg" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                    <div className="post-meta">
                      <p className="post-author">Mark Dower</p>
                      <p className="post-date">
                        <time datetime="2022-01-01">Jun 22, 2022</time>
                      </p>
                    </div>
                  </div>

                </article>
              </div>
              {/* End post list item  */}

            </div>
            {/* End recent posts list  */}

          </div>

        </section>
        {/* /Recent Posts Section  */}

        {/* Contact Section  */}
        <section id="contact" className="contact section light-background">

          {/* Section Title  */}
          <div className="container section-title">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          {/* End Section Title  */}

          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-4">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Perfect Coaching, Colonel Hat (Above Janata Bank,3rd &4th Floor), Chittagong, Bangladesh, 4217</p>
                  </div>
                </div>
                {/* End Info Item  */}

                <div className="info-item d-flex">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>01866-977599</p>
                  </div>
                </div>
                {/* End Info Item  */}

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>perfectcoaching2008@gmail.com</p>
                  </div>
                </div>
                {/* End Info Item  */}

              </div>

              <div className="col-lg-8">
                <form action="forms/contact.php" method="post" className="php-email-form">
                  <div className="row gy-4">

                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
                    </div>

                    <div className="col-md-6 ">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
                    </div>

                    <div className="col-md-12">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
                    </div>

                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>

                      <button type="submit">Send Message</button>
                    </div>

                  </div>
                </form>
              </div>
              {/* End Contact Form  */}

            </div>

          </div>

        </section>
        {/* {/* /Contact Section  */}

        {/* <!-- Scroll Top --> */}
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        </main>

        </AdminLayout>
        )
        }

export default Dashboard