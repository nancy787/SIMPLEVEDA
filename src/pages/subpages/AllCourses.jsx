import {Breadcrump, Container} from "../../index";

export default function AllCourses() {
    return (
        <>
        <Breadcrump/>
          <div className="generic-padding" style={{ paddingTop: 20, marginBottom: 60 }}>
            <div className="container mobile-view">
              <div
                className="tutor-course-filter-wrap row align-items-center"
                style={{ marginBottom: 20 }}
              >
                <div className="tutor-course-archive-results-wrap col">
                  {/*               <strong>22</strong> Courses */}
                </div>
                <div className="tutor-course-archive-filters-wrap col-auto">
                  <form className="tutor-course-filter-form" method="get">
                    <div className="selection-box">
                      <select name="tutor_course_filter" className="small">
                        <option selected="">Select Order</option>
                        <option value="newest_first">Release Date (newest first)</option>
                        <option value="oldest_first">Release Date (oldest first)</option>
                        <option value="course_title_az">Course Title (a-z)</option>
                        <option value="course_title_za">Course Title (z-a)</option>
                      </select>
                    </div>
                  </form>
                  
                </div>
              </div>
              <div className="container">
                <div className="filter row">
                  <nav className="navbar navbar-expand-lg navbar-light mobile-hide">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      style={{ marginTop: "-10px", marginLeft: "-15px" }}
                    >
                      <i aria-hidden="true" className="fas fa-filter" />
                    </button>
                  </nav>
                  <input id="all" type="checkbox" />
                  <input id="Upcoming" type="checkbox" />
                  <input id="Ongoing" type="checkbox" />
                  <input id="Past" type="checkbox" />
                  <input id="Arts" type="checkbox" />
                  <input id="Bhakti" type="checkbox" />
                  <input id="Philosophy" type="checkbox" />
                  <input id="Yoga" type="checkbox" />
                  <input id="Life" type="checkbox" />
                  <input id="English" type="checkbox" />
                  <input id="Hindi" type="checkbox" />
                  <input id="Free" type="checkbox" />
                  <input id="Paid" type="checkbox" />
                  <input id="Zoom" type="checkbox" />
                  <input id="Basic" type="checkbox" />
                  <input id="Intermediate" type="checkbox" />
                  <input id="Advance" type="checkbox" />
                  <input id="Pro" type="checkbox" />
                  <input id="Youtube" type="checkbox" />
                  <input id="Self" type="checkbox" />
                  <div className="filter__control col-lg-4 hide-me">
                    <h4 style={{ borderBottom: "2px solid #ffcd28", paddingBottom: 5 }}>
                      Status
                    </h4>
                    <label className="filter__button" htmlFor="all">
                      All
                    </label>
                    <label className="filter__button" htmlFor="Upcoming">
                      Upcoming Courses
                    </label>
                    <label className="filter__button" htmlFor="Ongoing">
                      Ongoing Courses
                    </label>
                    <label className="filter__button" htmlFor="Past">
                      Past Courses
                    </label>
                    <label className="filter__button" htmlFor="Self">
                      Self-paced
                    </label>
                    <h4
                      style={{
                        borderBottom: "2px solid #ffcd28",
                        padding: "10px 0 5px 0"
                      }}
                    >
                      Course Categories
                    </h4>
                    <label className="filter__button" htmlFor="Arts">
                      Art &amp; Skills
                    </label>
                    <label className="filter__button" htmlFor="Bhakti">
                      Bhakti
                    </label>
                    <label className="filter__button" htmlFor="Philosophy">
                      Philosophy
                    </label>
                    <label className="filter__button" htmlFor="Yoga">
                      Yoga
                    </label>
                    <label className="filter__button" htmlFor="Life">
                      Life &amp; Relationships
                    </label>
                    <h4
                      style={{
                        borderBottom: "2px solid #ffcd28",
                        padding: "10px 0 5px 0"
                      }}
                    >
                      Level
                    </h4>
                    <label className="filter__button" htmlFor="Basic">
                      1 | Basic
                    </label>
                    <label className="filter__button" htmlFor="Intermediate">
                      2 | Intermediate
                    </label>
                    <label className="filter__button" htmlFor="Advance">
                      3 | Advance
                    </label>
                    <label className="filter__button" htmlFor="Pro">
                      4 | Pro
                    </label>
                    <h4
                      style={{
                        borderBottom: "2px solid #ffcd28",
                        padding: "10px 0 5px 0"
                      }}
                    >
                      Language
                    </h4>
                    <label className="filter__button" htmlFor="English">
                      English
                    </label>
                    <label className="filter__button" htmlFor="Hindi">
                      Hindi
                    </label>
                    <h4
                      style={{
                        borderBottom: "2px solid #ffcd28",
                        padding: "10px 0 5px 0"
                      }}
                    >
                      Cost
                    </h4>
                    <label className="filter__button" htmlFor="Paid">
                      Paid
                    </label>
                    <label className="filter__button" htmlFor="Free">
                      Free
                    </label>
                    <h4
                      style={{
                        borderBottom: "2px solid #ffcd28",
                        padding: "10px 0 5px 0"
                      }}
                    >
                      Medium
                    </h4>
                    <label className="filter__button" htmlFor="Zoom">
                      Zoom
                    </label>
                    <label className="filter__button" htmlFor="Youtube">
                      Youtube
                    </label>
                  </div>
                </div>
              </div>






            </div>

            <div className="filter__content ">
  <ul className="filter__list">
    <div className="tutor-courses-wrap row" style={{ paddingBottom: 20 }}>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Ongoing 
				
									  Bhakti  
									  
									   Hindi Ongoing Paid Youtube Zoom 4 | Pro									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/madhurya-kadambini-3/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2024/03/Course-Banners-2.jpg"
                    alt="माधुर्य कादम्बिनी"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/madhurya-kadambini-3/">
                  {" "}
                  माधुर्य कादम्बिनी
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    16 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Ongoing
                  </h6>
                </div>
                <div className="col-lg-7">
                  <i
                    aria-hidden="true"
                    className="far fa-calendar-alt"
                    style={{ marginRight: 10 }}
                  />{" "}
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Start Date: <span style={{ color: "#116502" }}>Jun 20</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div>
                  <span className="tutor-course-price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <del aria-hidden="true">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          1,400.00
                        </bdi>
                      </span>
                    </del>{" "}
                    <ins>
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          1,100.00
                        </bdi>
                      </span>
                    </ins>
                  </span>
                </div>
                <div className="tutor-course-booking-progress tutor-d-flex tutor-align-center">
                  <div className="tutor-mr-8">
                    <div className="tutor-progress-circle" area-hidden="true" />
                  </div>
                  <div className="tutor-fs-7 tutor-fw-medium tutor-color-black">
                    31% Booked
                  </div>
                </div>
              </div>
              <div className="tutor-course-booking-availability tutor-mt-16">
                <a
                  href="?add-to-cart=44567"
                  data-quantity={1}
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  tutor-open-login-modal"
                  data-product_id={44567}
                  data-product_sku=""
                  aria-label="Add “माधुर्य कादम्बिनी” to your cart"
                  rel="nofollow"
                >
                  <span className="tutor-icon-cart-line tutor-mr-8" />
                  <span className="cart-text">Add to cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Ongoing 
				
									  Bhakti Philosophy  
									  
									   Hindi Ongoing Paid 4 | Pro									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/bhakti-shastri-2025-bh1/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2024/01/Course-Banners-1.jpg"
                    alt="भक्ति शास्त्री (2025) B1"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Philosophy/"
                  rel="tag"
                >
                  Philosophy
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/bhakti-shastri-2025-bh1/">
                  {" "}
                  भक्ति शास्त्री (2025) B1
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-empty" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    46 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Ongoing
                  </h6>
                </div>
                <div className="col-lg-7">
                  <i
                    aria-hidden="true"
                    className="far fa-calendar-alt"
                    style={{ marginRight: 10 }}
                  />{" "}
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Start Date: <span style={{ color: "#116502" }}>Jun 1</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div>
                  <span className="tutor-course-price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          ₹
                        </span>
                        4,500.00
                      </bdi>
                    </span>
                  </span>
                </div>
                <div className="tutor-course-booking-progress tutor-d-flex tutor-align-center">
                  <div className="tutor-mr-8">
                    <div className="tutor-progress-circle" area-hidden="true" />
                  </div>
                  <div className="tutor-fs-7 tutor-fw-medium tutor-color-black">
                    103% Booked
                  </div>
                </div>
              </div>
              <div className="tutor-course-booking-availability tutor-mt-16">
                {" "}
                <div className="list-item-booking booking-full tutor-d-flex tutor-align-center">
                  <div className="booking-progress tutor-d-flex">
                    <span className="tutor-mr-8 tutor-color-warning tutor-icon-circle-info" />
                  </div>
                  <div className="tutor-fs-7 tutor-fw-medium">Fully Booked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Ongoing 
				
									  Bhakti Philosophy  
									  
									   English Ongoing Paid 4 | Pro									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/bhakti-shastri-2025-b1/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2023/12/Course-Banners-2.jpg"
                    alt="Bhakti Shastri (2025) B1"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Philosophy/"
                  rel="tag"
                >
                  Philosophy
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/bhakti-shastri-2025-b1/">
                  {" "}
                  Bhakti Shastri (2025) B1
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    24 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Ongoing
                  </h6>
                </div>
                <div className="col-lg-7">
                  <i
                    aria-hidden="true"
                    className="far fa-calendar-alt"
                    style={{ marginRight: 10 }}
                  />{" "}
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Start Date: <span style={{ color: "#116502" }}>Jun 1</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div>
                  <span className="tutor-course-price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          ₹
                        </span>
                        6,000.00
                      </bdi>
                    </span>
                  </span>
                </div>
                <div className="tutor-course-booking-progress tutor-d-flex tutor-align-center">
                  <div className="tutor-mr-8">
                    <div className="tutor-progress-circle" area-hidden="true" />
                  </div>
                  <div className="tutor-fs-7 tutor-fw-medium tutor-color-black">
                    42% Booked
                  </div>
                </div>
              </div>
              <div className="tutor-course-booking-availability tutor-mt-16">
                <a
                  href="?add-to-cart=44494"
                  data-quantity={1}
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  tutor-open-login-modal"
                  data-product_id={44494}
                  data-product_sku=""
                  aria-label="Add “Bhakti Shastri (2025) B1” to your cart"
                  rel="nofollow"
                >
                  <span className="tutor-icon-cart-line tutor-mr-8" />
                  <span className="cart-text">Add to cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Arts & Skills Bhakti  
									  
									   English Free Self-paced Youtube 1 | Basic									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/pranam-mantra/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2025/01/Pranam-Mantravali.jpg"
                    alt="Pranām Mantrāvalī"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Arts & Skills/"
                  rel="tag"
                >
                  Arts &amp; Skills
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/pranam-mantra/">
                  {" "}
                  Pranām Mantrāvalī
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    1 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className="tutor-course-list-btn">
                <a
                  href="https://simplevedas.com/courses/pranam-mantra/"
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block tutor-open-login-modal"
                >
                  Enroll Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Upcoming 
				
									  Bhakti  
									  
									   Hindi Paid Upcoming Courses Zoom 2 | Intermediate									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/idchindi11/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2023/03/Course-Banners-2.jpg"
                    alt="इस्कॉन शिष्यत्व पाठ्यक्रम (IDC) (B11)"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/idchindi11/">
                  {" "}
                  इस्कॉन शिष्यत्व पाठ्यक्रम (IDC) (B11)
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    52 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Upcoming
                  </h6>
                </div>
                <div className="col-lg-7">
                  <i
                    aria-hidden="true"
                    className="far fa-calendar-alt"
                    style={{ marginRight: 10 }}
                  />{" "}
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Start Date: <span style={{ color: "#116502" }}>Nov 5</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div>
                  <span className="tutor-course-price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          ₹
                        </span>
                        901.00
                      </bdi>
                    </span>
                  </span>
                </div>
                <div className="tutor-course-booking-progress tutor-d-flex tutor-align-center">
                  <div className="tutor-mr-8">
                    <div className="tutor-progress-circle" area-hidden="true" />
                  </div>
                  <div className="tutor-fs-7 tutor-fw-medium tutor-color-black">
                    52% Booked
                  </div>
                </div>
              </div>
              <div className="tutor-course-booking-availability tutor-mt-16">
                <a
                  href="?add-to-cart=43402"
                  data-quantity={1}
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  tutor-open-login-modal"
                  data-product_id={43402}
                  data-product_sku=""
                  aria-label="Add “इस्कॉन शिष्यत्व पाठ्यक्रम (IDC) (B11)” to your cart"
                  rel="nofollow"
                >
                  <span className="tutor-icon-cart-line tutor-mr-8" />
                  <span className="cart-text">Add to cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Arts & Skills Bhakti  
									  
									   Free Hindi Self-paced Youtube 1 | Basic									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/pranam-mantra-hindi/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2024/10/Course-Banners.jpg"
                    alt="प्रणाम मंत्रावली"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Arts & Skills/"
                  rel="tag"
                >
                  Arts &amp; Skills
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/pranam-mantra-hindi/">
                  {" "}
                  प्रणाम मंत्रावली
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    3 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className="tutor-course-list-btn">
                <a
                  href="https://simplevedas.com/courses/pranam-mantra-hindi/"
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block tutor-open-login-modal"
                >
                  Enroll Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Past 
				
									  Bhakti  
									  
									   English Paid Upcoming Courses Zoom 2 | Intermediate									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/idc4/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2023/05/Course-Banners-1.jpg"
                    alt="ISKCON Disciple Course (B5)"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/idc4/">
                  {" "}
                  ISKCON Disciple Course (B5)
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    15 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Past
                  </h6>
                </div>
                <div className="col-lg-7">
                  <i
                    aria-hidden="true"
                    className="far fa-calendar-alt"
                    style={{ marginRight: 10 }}
                  />{" "}
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Start Date: <span style={{ color: "#116502" }}>May 23</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div>
                  <span className="tutor-course-price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          ₹
                        </span>
                        901.00
                      </bdi>
                    </span>
                  </span>
                </div>
                <div className="tutor-course-booking-progress tutor-d-flex tutor-align-center">
                  <div className="tutor-mr-8">
                    <div className="tutor-progress-circle" area-hidden="true" />
                  </div>
                  <div className="tutor-fs-7 tutor-fw-medium tutor-color-black">
                    23% Booked
                  </div>
                </div>
              </div>
              <div className="tutor-course-booking-availability tutor-mt-16">
                <a
                  href="?add-to-cart=41595"
                  data-quantity={1}
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  tutor-open-login-modal"
                  data-product_id={41595}
                  data-product_sku=""
                  aria-label="Add “ISKCON Disciple Course (B5)” to your cart"
                  rel="nofollow"
                >
                  <span className="tutor-icon-cart-line tutor-mr-8" />
                  <span className="cart-text">Add to cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Bhakti Philosophy  
									  
									   Hindi Paid Self-paced Youtube 4 | Pro									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/dasa-mula-tattva-hindi/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2024/08/Course-Banners-1.jpg"
                    alt="दश मूल तत्त्व"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Philosophy/"
                  rel="tag"
                >
                  Philosophy
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/dasa-mula-tattva-hindi/">
                  {" "}
                  दश मूल तत्त्व
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    3 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div className="list-item-price tutor-d-flex tutor-align-center">
                  {" "}
                  <span className="price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <del aria-hidden="true">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          800.00
                        </bdi>
                      </span>
                    </del>{" "}
                    <ins>
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          400.00
                        </bdi>
                      </span>
                    </ins>{" "}
                  </span>
                </div>
                <div className="list-item-button">
                  <a
                    href="?add-to-cart=40510"
                    data-quantity={1}
                    className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  tutor-open-login-modal"
                    data-product_id={40510}
                    data-product_sku=""
                    aria-label="Add “दश मूल तत्त्व” to your cart"
                    rel="nofollow"
                  >
                    <span className="tutor-icon-cart-line tutor-mr-8" />
                    <span className="cart-text">Add to cart</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Bhakti Philosophy  
									  
									   English Paid Self-paced Youtube 4 | Pro									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/dasa-mula-tattva/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2024/08/Course-Banners.jpg"
                    alt="Daśa Mūla Tattva"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Philosophy/"
                  rel="tag"
                >
                  Philosophy
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/dasa-mula-tattva/">
                  {" "}
                  Daśa Mūla Tattva
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    3 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div className="list-item-price tutor-d-flex tutor-align-center">
                  {" "}
                  <span className="price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <del aria-hidden="true">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          800.00
                        </bdi>
                      </span>
                    </del>{" "}
                    <ins>
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          400.00
                        </bdi>
                      </span>
                    </ins>{" "}
                  </span>
                </div>
                <div className="list-item-button">
                  <a
                    href="?add-to-cart=40496"
                    data-quantity={1}
                    className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  tutor-open-login-modal"
                    data-product_id={40496}
                    data-product_sku=""
                    aria-label="Add “Daśa Mūla Tattva” to your cart"
                    rel="nofollow"
                  >
                    <span className="tutor-icon-cart-line tutor-mr-8" />
                    <span className="cart-text">Add to cart</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Bhakti  
									  
									   Free Hindi Self-paced Youtube 1 | Basic									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/prabhupada-2/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2024/07/Course-Banners.jpg"
                    alt="प्रभुपाद"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/prabhupada-2/">
                  {" "}
                  प्रभुपाद
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    11 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className="tutor-course-list-btn">
                <a
                  href="https://simplevedas.com/courses/prabhupada-2/"
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block tutor-open-login-modal"
                >
                  Enroll Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Bhakti  
									  
									   Hindi Paid Self-paced Zoom 2 | Intermediate									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/idchindi5/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2023/03/Course-Banners-2.jpg"
                    alt="इस्कॉन शिष्यत्व पाठ्यक्रम (Self-paced)"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/idchindi5/">
                  {" "}
                  इस्कॉन शिष्यत्व पाठ्यक्रम (Self-paced)
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    52 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div className="list-item-price tutor-d-flex tutor-align-center">
                  {" "}
                  <span className="price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          ₹
                        </span>
                        701.00
                      </bdi>
                    </span>{" "}
                  </span>
                </div>
                <div className="list-item-button">
                  <a
                    href="?add-to-cart=38716"
                    data-quantity={1}
                    className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  tutor-open-login-modal"
                    data-product_id={38716}
                    data-product_sku=""
                    aria-label="Add “इस्कॉन शिष्यत्व पाठ्यक्रम (Self-paced)” to your cart"
                    rel="nofollow"
                  >
                    <span className="tutor-icon-cart-line tutor-mr-8" />
                    <span className="cart-text">Add to cart</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Bhakti Philosophy  
									  
									   Hindi Paid Self-paced Youtube 3 | Advance									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/gita-shastri-hindi/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2024/03/Course-Banners.jpg"
                    alt="गीता शास्त्री"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Philosophy/"
                  rel="tag"
                >
                  Philosophy
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/gita-shastri-hindi/">
                  {" "}
                  गीता शास्त्री
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    6 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div className="list-item-price tutor-d-flex tutor-align-center">
                  {" "}
                  <span className="price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <del aria-hidden="true">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          901.00
                        </bdi>
                      </span>
                    </del>{" "}
                    <ins>
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          501.00
                        </bdi>
                      </span>
                    </ins>{" "}
                  </span>
                </div>
                <div className="list-item-button">
                  <a
                    href="?add-to-cart=37449"
                    data-quantity={1}
                    className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  tutor-open-login-modal"
                    data-product_id={37449}
                    data-product_sku=""
                    aria-label="Add “गीता शास्त्री” to your cart"
                    rel="nofollow"
                  >
                    <span className="tutor-icon-cart-line tutor-mr-8" />
                    <span className="cart-text">Add to cart</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Bhakti  
									  
									   English Ongoing Paid Self-paced Youtube 4 | Pro									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/madhurya-kadambini/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2024/02/Course-Banners-1.jpg"
                    alt="Madhurya Kadambini"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/madhurya-kadambini/">
                  {" "}
                  Madhurya Kadambini
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    13 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div className="list-item-price tutor-d-flex tutor-align-center">
                  {" "}
                  <span className="price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <del aria-hidden="true">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          1,400.00
                        </bdi>
                      </span>
                    </del>{" "}
                    <ins>
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          400.00
                        </bdi>
                      </span>
                    </ins>{" "}
                  </span>
                </div>
                <div className="list-item-button">
                  <a
                    href="?add-to-cart=37082"
                    data-quantity={1}
                    className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  tutor-open-login-modal"
                    data-product_id={37082}
                    data-product_sku=""
                    aria-label="Add “Madhurya Kadambini” to your cart"
                    rel="nofollow"
                  >
                    <span className="tutor-icon-cart-line tutor-mr-8" />
                    <span className="cart-text">Add to cart</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Bhakti  
									  
									   English Free Self-paced Youtube 1 | Basic									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/prabhupada/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2024/02/Course-Banners.jpg"
                    alt="Prabhupada"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/prabhupada/">
                  {" "}
                  Prabhupada
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    8 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className="tutor-course-list-btn">
                <a
                  href="https://simplevedas.com/courses/prabhupada/"
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block tutor-open-login-modal"
                >
                  Enroll Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Past 
				
									  Bhakti Philosophy  
									  
									   Hindi Paid Past 4 | Pro									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/bhakti-shastri-2024-bh1/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2024/01/Course-Banners-1.jpg"
                    alt="भक्ति शास्त्री (2024) B1"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Philosophy/"
                  rel="tag"
                >
                  Philosophy
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/bhakti-shastri-2024-bh1/">
                  {" "}
                  भक्ति शास्त्री (2024) B1
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-empty" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    46 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Past
                  </h6>
                </div>
                <div className="col-lg-7">
                  <i
                    aria-hidden="true"
                    className="far fa-calendar-alt"
                    style={{ marginRight: 10 }}
                  />{" "}
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Start Date: <span style={{ color: "#116502" }}>Mar 30</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div>
                  <span className="tutor-course-price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          ₹
                        </span>
                        4,500.00
                      </bdi>
                    </span>
                  </span>
                </div>
                <div className="tutor-course-booking-progress tutor-d-flex tutor-align-center">
                  <div className="tutor-mr-8">
                    <div className="tutor-progress-circle" area-hidden="true" />
                  </div>
                  <div className="tutor-fs-7 tutor-fw-medium tutor-color-black">
                    98% Booked
                  </div>
                </div>
              </div>
              <div className="tutor-course-booking-availability tutor-mt-16">
                <a
                  href="?add-to-cart=36224"
                  data-quantity={1}
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  tutor-open-login-modal"
                  data-product_id={36224}
                  data-product_sku=""
                  aria-label="Add “भक्ति शास्त्री (2024) B1” to your cart"
                  rel="nofollow"
                >
                  <span className="tutor-icon-cart-line tutor-mr-8" />
                  <span className="cart-text">Add to cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Past 
				
									  Bhakti Philosophy  
									  
									   English Paid Past 4 | Pro									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/bhakti-shastri-2024-b1/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2023/12/Course-Banners-2.jpg"
                    alt="Bhakti Shastri (2024) B1"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Philosophy/"
                  rel="tag"
                >
                  Philosophy
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/bhakti-shastri-2024-b1/">
                  {" "}
                  Bhakti Shastri (2024) B1
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    24 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Past
                  </h6>
                </div>
                <div className="col-lg-7">
                  <i
                    aria-hidden="true"
                    className="far fa-calendar-alt"
                    style={{ marginRight: 10 }}
                  />{" "}
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Start Date: <span style={{ color: "#116502" }}>Feb 3</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div>
                  <span className="tutor-course-price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          ₹
                        </span>
                        6,000.00
                      </bdi>
                    </span>
                  </span>
                </div>
                <div className="tutor-course-booking-progress tutor-d-flex tutor-align-center">
                  <div className="tutor-mr-8">
                    <div className="tutor-progress-circle" area-hidden="true" />
                  </div>
                  <div className="tutor-fs-7 tutor-fw-medium tutor-color-black">
                    83% Booked
                  </div>
                </div>
              </div>
              <div className="tutor-course-booking-availability tutor-mt-16">
                <a
                  href="?add-to-cart=35496"
                  data-quantity={1}
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  tutor-open-login-modal"
                  data-product_id={35496}
                  data-product_sku=""
                  aria-label="Add “Bhakti Shastri (2024) B1” to your cart"
                  rel="nofollow"
                >
                  <span className="tutor-icon-cart-line tutor-mr-8" />
                  <span className="cart-text">Add to cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Bhakti Philosophy  
									  
									   Free Hindi Self-paced Youtube 2 | Intermediate									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/gdchindi2023/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2023/04/Gita-course-6.jpg"
                    alt="गीता डिप्लोमा कोर्स (2023)"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Philosophy/"
                  rel="tag"
                >
                  Philosophy
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/gdchindi2023/">
                  {" "}
                  गीता डिप्लोमा कोर्स (2023)
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    38 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className="tutor-course-list-btn">
                <a
                  href="https://simplevedas.com/courses/gdchindi2023/"
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block tutor-open-login-modal"
                >
                  Enroll Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Arts & Skills Bhakti  
									  
									   English Free Self-paced Youtube 1 | Basic									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/learn-gita-verses-easily/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2021/01/4.jpg"
                    alt="Learn Gita Verses Easily"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Arts & Skills/"
                  rel="tag"
                >
                  Arts &amp; Skills
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/learn-gita-verses-easily/">
                  {" "}
                  Learn Gita Verses Easily
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    2 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className="tutor-course-list-btn">
                <a
                  href="https://simplevedas.com/courses/learn-gita-verses-easily/"
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block tutor-open-login-modal"
                >
                  Enroll Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Bhakti Philosophy  
									  
									   English Free Self-paced Youtube 1 | Basic									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/gods-great-plan/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2021/08/Gods-Plan.jpg"
                    alt="God’s Great Plan"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Philosophy/"
                  rel="tag"
                >
                  Philosophy
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/gods-great-plan/">
                  {" "}
                  God’s Great Plan
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-empty" />
                  <span className="dashicons dashicons-star-empty" />
                  <span className="dashicons dashicons-star-empty" />
                  <span className="dashicons dashicons-star-empty" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    0 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className="tutor-course-list-btn">
                <a
                  href="https://simplevedas.com/courses/gods-great-plan/"
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block tutor-open-login-modal"
                >
                  Enroll Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Bhakti Philosophy  
									  
									   English Paid Self-paced Youtube 3 | Advance									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/gita-shastri/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2021/01/8.jpg"
                    alt="Gita Shastri"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Philosophy/"
                  rel="tag"
                >
                  Philosophy
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/gita-shastri/">
                  {" "}
                  Gita Shastri
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    5 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className=" tutor-d-flex tutor-align-center tutor-justify-between ">
                <div className="list-item-price tutor-d-flex tutor-align-center">
                  {" "}
                  <span className="price tutor-fs-6 tutor-fw-bold tutor-color-black">
                    <del aria-hidden="true">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          2,500.00
                        </bdi>
                      </span>
                    </del>{" "}
                    <ins>
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            ₹
                          </span>
                          501.00
                        </bdi>
                      </span>
                    </ins>{" "}
                  </span>
                </div>
                <div className="list-item-button">
                  <a
                    href="?add-to-cart=27691"
                    data-quantity={1}
                    className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block  product_type_simple add_to_cart_button  tutor-open-login-modal"
                    data-product_id={27691}
                    data-product_sku=""
                    aria-label="Add “Gita Shastri” to your cart"
                    rel="nofollow"
                  >
                    <span className="tutor-icon-cart-line tutor-mr-8" />
                    <span className="cart-text">Add to cart</span>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Bhakti Philosophy  
									  
									   English Free Self-paced Youtube 2 | Intermediate									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/gita-diploma-course/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2021/01/6.jpg"
                    alt="Gita Diploma Course"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Philosophy/"
                  rel="tag"
                >
                  Philosophy
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/gita-diploma-course/">
                  {" "}
                  Gita Diploma Course
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-empty" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    16 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className="tutor-course-list-btn">
                <a
                  href="https://simplevedas.com/courses/gita-diploma-course/"
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block tutor-open-login-modal"
                >
                  Enroll Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li
        className="filter__item"
        style={{ marginBottom: 20 }}
        data-filter="Self-paced 
				
									  Arts & Skills Bhakti  
									  
									   Free Hindi Self-paced Youtube 1 | Basic									  
									  
									  
									  
									  
									  "
      >
        <div
          className="dtlms-courselist-item-wrapper type7"
          style={{ width: 366, margin: "10px 18px" }}
        >
          <div className="dtlms-courselist-thumb">
            <div className="tutor-course-thumbnail">
              <a
                href="https://simplevedas.com/courses/learn-gita-shloka-hindi/"
                className="tutor-d-block"
              >
                <div className="tutor-ratio tutor-ratio-16x9">
                  <img
                    className="tutor-card-image-top"
                    src="https://simplevedas.com/wp-content/uploads/2021/01/5.jpg"
                    alt="गीता श्लोक कंठस्थ कैसे करें"
                    loading="lazy"
                  />
                </div>
              </a>
            </div>
            {/* 		<div class="dtlms-courselist-metadata-featurednpurchase">
			<div class="dtlms-course-listing-featured"><span class="dtlms-course-listing-featured-text">Featured</span></div>
		</div> */}
            <div className="dtlms-courselist-metadata-badgenhours">
              {/* 			<div class="dtlms-certificate-badge">
				<span class="dtlms-certificate"></span>
			</div>
			<div class="dtlms-courselist-duration">
			                <i class="fas fa-clock"></i>
			                <span>1d 16h 40m </span>
			</div> */}
            </div>
          </div>
          <div className="dtlms-courselist-details">
            <div className="dtlms-courselist-details-inner">
              <p className="dtlms-courselist-tags">
                <a
                  href="https://www.simplevedas.com/course-category/Arts & Skills/"
                  rel="tag"
                >
                  Arts &amp; Skills
                </a>
                ,
                <a
                  href="https://www.simplevedas.com/course-category/Bhakti/"
                  rel="tag"
                >
                  Bhakti
                </a>
                ,
              </p>
              <h5>
                <a href="https://simplevedas.com/courses/learn-gita-shloka-hindi/">
                  {" "}
                  गीता श्लोक कंठस्थ कैसे करें
                </a>
              </h5>
              <div
                className="dtlms-courselist-ratings-container"
                style={{ marginBottom: "15px !important" }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".tutor-ratings-stars{display:inline !important;} .dashicons-star-filled{color:#fccc27;}"
                  }}
                />
                <div className="tutor-loop-rating-wrap ">
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span className="dashicons dashicons-star-filled" />
                  <span
                    className="tutor-ratings-count"
                    style={{ fontSize: 14 }}
                  >
                    1 Ratings{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <i
                    aria-hidden="true"
                    className="far fa-clock"
                    style={{ marginRight: 10 }}
                  />
                  <h6
                    style={{
                      color: "#021844",
                      fontSize: 14,
                      border: "1px dashed",
                      padding: 5,
                      textAlign: "center",
                      display: "inline-block"
                    }}
                  >
                    {" "}
                    Self-paced
                  </h6>
                </div>
                <div className="col-lg-7"></div>
              </div>
            </div>
            <div className="dtlms-courselist-bottom-section">
              <div className="tutor-course-list-btn">
                <a
                  href="https://simplevedas.com/courses/learn-gita-shloka-hindi/"
                  className="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-btn-block tutor-open-login-modal"
                >
                  Enroll Course
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  </ul>
</div>

          </div>

    </>
    )
}