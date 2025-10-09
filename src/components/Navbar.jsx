import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/simple-vedas-logo.png";
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

 const menuItems = [
    { label: 'Simple Vedas', href: 'https://simplevedas.com/simple-vedas/' },
    { label: 'Srila Prabhupada', href: 'https://simplevedas.com/srila-prabhupada/' },
    { label: 'Our Inspiration', href: 'https://simplevedas.com/our-inspiration/' },
    { label: 'Madhusudana Visnu Das', href: 'https://simplevedas.com/madhusudana-visnu-das/' }
  ];

  const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About ▼' },
        { path: '/courses', name: 'Courses' },
        { path: '/quotes', name: 'Quotes' },
        { path: '/Shop', name: 'Shop' },
        { path: '/contact', name: 'Contact' },
  ];

return (
  <>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-63ab213 elementor-section-height-min-height elementor-hidden-mobile elementor-hidden-tablet d4189f66-3e69-4af9-8120-5b5c5f923b14 elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
      data-id="63ab213"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-0dc8e24"
          data-id="0dc8e24"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-d89416c elementor-widget elementor-widget-image"
              data-id="d89416c"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '/*! elementor - v3.17.0 - 08-11-2023 */\n.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}'
                  }}
                />{" "}
                <a href="https://simplevedas.com/">
                  <img
                    src={Logo}
                    className="attachment-full size-full wp-image-19964"
                    alt="simpleVedaLogo"
                    sizes="(max-width: 562px) 100vw, 562px"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-07500ed"
          data-id="07500ed"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-7b540e1 elementor-nav-menu__align-right elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
              data-id="7b540e1"
              data-element_type="widget"
              id="main_menu"
              data-settings='{"submenu_icon":{"value":"<i class=\"fas fa-angle-down\"><\/i>","library":"fa-solid"},"layout":"horizontal","toggle":"burger"}'
              data-widget_type="nav-menu.default"
            >
              <div className="elementor-widget-container">
                <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
                  <ul
                    id="menu-1-7b540e1"
                    className="elementor-nav-menu"
                    data-smartmenus-id={1759656675106776}
                  >
                    {navLinks.map((link) => (
                         <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-17810 current_page_item menu-item-20207">
                          <NavLink to={link.path}
                          className={({ isActive }) => (isActive 
                            ? 'elementor-item elementor-item-active' 
                            : 'elementor-item'
                          )}
                          >
                              {link.name}
                          </NavLink>
                        </li>
                    ))}
                    <li className=" astm-search-menu is-menu full-width-menu menu-item">
                      <a href="#" aria-label="Search Icon Link">
                        <svg
                          width={20}
                          height={20}
                          className="search-icon"
                          role="img"
                          viewBox="2 9 20 5"
                          focusable="false"
                          aria-label="Search"
                        >
                          <path
                            className="search-icon-path"
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                          />
                        </svg>
                      </a>
                      <form
                        className="is-search-form is-form-style is-form-style-3 is-form-id-20693 "
                        action="https://simplevedas.com/"
                        method="get"
                        role="search"
                      >
                        <label htmlFor="is-search-input-20693">
                          <span className="is-screen-reader-text">
                            Search for:
                          </span>
                          <input
                            type="search"
                            id="is-search-input-20693"
                            name="s"
                            defaultValue=""
                            className="is-search-input"
                            placeholder="Search here..."
                            autoComplete="off"
                          />
                        </label>
                        <button type="submit" className="is-search-submit">
                          <span className="is-screen-reader-text">
                            Search Button
                          </span>
                          <span className="is-search-icon">
                            <svg
                              focusable="false"
                              aria-label="Search"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24px"
                            >
                              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                          </span>
                        </button>
                        <input type="hidden" name="id" defaultValue={20693} />
                      </form>
                    </li>
                  </ul>{" "}
                </nav>
                <div>
                  <i
                    aria-hidden="true"
                    role="presentation"
                    className="elementor-menu-toggle__icon--open eicon-menu-bar"
                  />
                  <i
                    aria-hidden="true"
                    role="presentation"
                    className="elementor-menu-toggle__icon--close eicon-close"
                  />{" "}
                  <span className="elementor-screen-only">Menu</span>
                </div>
                <nav
                  className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                  aria-hidden="true"
                >
                  <ul
                    id="menu-2-7b540e1"
                    className="elementor-nav-menu"
                    data-smartmenus-id={17596566751103633}
                  >
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-17810 current_page_item menu-item-20207">
                      <a
                        href="https://simplevedas.com/"
                        aria-current="page"
                        onclick="return true"
                        className="elementor-item elementor-item-active"
                        tabIndex={-1}
                      >
                        Home
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20218">
                      <a
                        href="https://simplevedas.com/simple-vedas/"
                        onclick="return true"
                        className="elementor-item has-submenu"
                        tabIndex={-1}
                        id="sm-17596566751103633-1"
                        aria-haspopup="true"
                        aria-controls="sm-17596566751103633-2"
                        aria-expanded="false"
                      >
                        About
                        <span className="sub-arrow">
                          <i className="fas fa-angle-down" />
                        </span>
                      </a>
                      <ul
                        className="sub-menu elementor-nav-menu--dropdown"
                        id="sm-17596566751103633-2"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-17596566751103633-1"
                        aria-expanded="false"
                      >
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20216">
                          <a
                            href="https://simplevedas.com/simple-vedas/"
                            onclick="return true"
                            className="elementor-sub-item"
                            tabIndex={-1}
                          >
                            Simple Vedas
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20217">
                          <a
                            href="https://simplevedas.com/srila-prabhupada/"
                            onclick="return true"
                            className="elementor-sub-item"
                            tabIndex={-1}
                          >
                            Srila Prabhupada
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20213">
                          <a
                            href="https://simplevedas.com/our-inspiration/"
                            onclick="return true"
                            className="elementor-sub-item"
                            tabIndex={-1}
                          >
                            Our Inspiration
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20212">
                          <a
                            href="https://simplevedas.com/madhusudana-visnu-das/"
                            onclick="return true"
                            className="elementor-sub-item"
                            tabIndex={-1}
                          >
                            Madhusudana Visnu Das
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25599">
                      <a
                        href="https://simplevedas.com/course/"
                        onclick="return true"
                        className="elementor-item"
                        tabIndex={-1}
                      >
                        Courses
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20219">
                      <a
                        onclick="return true"
                        className="elementor-item has-submenu"
                        tabIndex={-1}
                        id="sm-17596566751103633-3"
                        aria-haspopup="true"
                        aria-controls="sm-17596566751103633-4"
                        aria-expanded="false"
                      >
                        Media
                        <span className="sub-arrow">
                          <i className="fas fa-angle-down" />
                        </span>
                      </a>
                      <ul
                        className="sub-menu elementor-nav-menu--dropdown"
                        id="sm-17596566751103633-4"
                        role="group"
                        aria-hidden="true"
                        aria-labelledby="sm-17596566751103633-3"
                        aria-expanded="false"
                      >
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20432">
                          <a
                            href="https://simplevedas.com/hindi-lectures/"
                            onclick="return true"
                            className="elementor-sub-item has-submenu"
                            tabIndex={-1}
                            id="sm-17596566751103633-5"
                            aria-haspopup="true"
                            aria-controls="sm-17596566751103633-6"
                            aria-expanded="false"
                          >
                            Audio
                            <span className="sub-arrow">
                              <i className="fas fa-angle-down" />
                            </span>
                          </a>
                          <ul
                            className="sub-menu elementor-nav-menu--dropdown"
                            id="sm-17596566751103633-6"
                            role="group"
                            aria-hidden="true"
                            aria-labelledby="sm-17596566751103633-5"
                            aria-expanded="false"
                          >
                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20220">
                              <a
                                href="https://simplevedas.com/hindi-lectures/"
                                onclick="return true"
                                className="elementor-sub-item has-submenu"
                                tabIndex={-1}
                                id="sm-17596566751103633-7"
                                aria-haspopup="true"
                                aria-controls="sm-17596566751103633-8"
                                aria-expanded="false"
                              >
                                Lectures
                                <span className="sub-arrow">
                                  <i className="fas fa-angle-down" />
                                </span>
                              </a>
                              <ul
                                className="sub-menu elementor-nav-menu--dropdown"
                                id="sm-17596566751103633-8"
                                role="group"
                                aria-hidden="true"
                                aria-labelledby="sm-17596566751103633-7"
                                aria-expanded="false"
                              >
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26213">
                                  <a
                                    href="https://simplevedas.com/hindi-lectures-2/"
                                    onclick="return true"
                                    className="elementor-sub-item"
                                    tabIndex={-1}
                                  >
                                    English
                                  </a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20209">
                                  <a
                                    href="https://simplevedas.com/hindi-lectures/"
                                    onclick="return true"
                                    className="elementor-sub-item"
                                    tabIndex={-1}
                                  >
                                    Hindi
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20214">
                              <a
                                href="https://simplevedas.com/podcasts/"
                                onclick="return true"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Podcasts
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20221">
                          <a
                            href="https://simplevedas.com/english-videos/"
                            onclick="return true"
                            className="elementor-sub-item has-submenu"
                            tabIndex={-1}
                            id="sm-17596566751103633-9"
                            aria-haspopup="true"
                            aria-controls="sm-17596566751103633-10"
                            aria-expanded="false"
                          >
                            Videos
                            <span className="sub-arrow">
                              <i className="fas fa-angle-down" />
                            </span>
                          </a>
                          <ul
                            className="sub-menu elementor-nav-menu--dropdown"
                            id="sm-17596566751103633-10"
                            role="group"
                            aria-hidden="true"
                            aria-labelledby="sm-17596566751103633-9"
                            aria-expanded="false"
                          >
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20390">
                              <a
                                href="https://simplevedas.com/english-videos/"
                                onclick="return true"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                English
                              </a>
                            </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20210">
                              <a
                                href="https://simplevedas.com/hindi-videos/"
                                onclick="return true"
                                className="elementor-sub-item"
                                tabIndex={-1}
                              >
                                Hindi
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20215">
                      <a
                        href="https://simplevedas.com/quotes/"
                        onclick="return true"
                        className="elementor-item"
                        tabIndex={-1}
                      >
                        Quotes
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28705">
                      <a
                        href="https://simplevedas.com/store/"
                        onclick="return true"
                        className="elementor-item"
                        tabIndex={-1}
                      >
                        Shop
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20208">
                      <a
                        href="https://simplevedas.com/contact/"
                        onclick="return true"
                        className="elementor-item"
                        tabIndex={-1}
                      >
                        Contact
                      </a>
                    </li>
                    <li className=" astm-search-menu is-menu full-width-menu menu-item">
                      <a href="#" aria-label="Search Icon Link">
                        <svg
                          width={20}
                          height={20}
                          className="search-icon"
                          role="img"
                          viewBox="2 9 20 5"
                          focusable="false"
                          aria-label="Search"
                        >
                          <path
                            className="search-icon-path"
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                          />
                        </svg>
                      </a>
                      <form
                        className="is-search-form is-form-style is-form-style-3 is-form-id-20693 "
                        action="https://simplevedas.com/"
                        method="get"
                        role="search"
                      >
                        <label htmlFor="is-search-input-20693">
                          <span className="is-screen-reader-text">
                            Search for:
                          </span>
                          <input
                            type="search"
                            id="is-search-input-20693"
                            name="s"
                            defaultValue=""
                            className="is-search-input"
                            placeholder="Search here..."
                            autoComplete="off"
                          />
                        </label>
                        <button type="submit" className="is-search-submit">
                          <span className="is-screen-reader-text">
                            Search Button
                          </span>
                          <span className="is-search-icon">
                            <svg
                              focusable="false"
                              aria-label="Search"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24px"
                            >
                              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                          </span>
                        </button>
                        <input type="hidden" name="id" defaultValue={20693} />
                      </form>
                    </li>
                  </ul>{" "}
                </nav>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-38a3ca5 elementor-widget elementor-widget-shortcode"
              data-id="38a3ca5"
              data-element_type="widget"
              data-widget_type="shortcode.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-shortcode">
                  <style
                    dangerouslySetInnerHTML={{
                      __html: " #header_logout{display:none} "
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-084fce0"
          data-id="084fce0"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-2fe31a2 elementor-menu-cart--items-indicator-none elementor-menu-cart--cart-type-mini-cart toggle-icon--cart-solid elementor-menu-cart--show-remove-button-yes elementor-widget elementor-widget-woocommerce-menu-cart"
              data-id="2fe31a2"
              data-element_type="widget"
              data-settings='{"cart_type":"mini-cart","open_cart":"click"}'
              data-widget_type="woocommerce-menu-cart.default"
            >
              <div className="elementor-widget-container">
                <link
                  rel="stylesheet"
                  href="https://simplevedas.com/wp-content/plugins/elementor-pro/assets/css/widget-woocommerce.min.css"
                />{" "}
                <div className="elementor-menu-cart__wrapper">
                  <div className="elementor-menu-cart__toggle_wrapper">
                    <div
                      className="elementor-menu-cart__container elementor-lightbox"
                      aria-hidden="true"
                    >
                      <div
                        className="elementor-menu-cart__main"
                        aria-hidden="true"
                      >
                        <div className="elementor-menu-cart__close-button"></div>
                        <div className="widget_shopping_cart_content">
                          {" "}
                          <div className="woocommerce-mini-cart__empty-message">
                            No products in the cart.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-menu-cart__toggle elementor-button-wrapper">
                      <a
                        id="elementor-menu-cart__toggle_button"
                        href="#"
                        className="elementor-menu-cart__toggle_button elementor-button elementor-size-sm"
                        aria-expanded="false"
                      >
                        <span className="elementor-button-text">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                ₹
                              </span>
                              0.00
                            </bdi>
                          </span>
                        </span>
                        <span className="elementor-button-icon">
                          <span
                            className="elementor-button-icon-qty"
                            data-counter={0}
                          >
                            0
                          </span>
                          <i className="eicon-cart-solid" />{" "}
                          <span className="elementor-screen-only">Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* close elementor-menu-cart__wrapper */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-6b9ef26 elementor-hidden-desktop d4189f66-3e69-4af9-8120-5b5c5f923b14 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="6b9ef26"
      data-element_type="section"
      id="height"
      data-settings='{"background_background":"classic"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-85024cd"
          data-id="85024cd"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-a68d95a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="a68d95a"
              data-element_type="section"
              id="mobile_logout"
            >
              <div className="elementor-container elementor-column-gap-default">
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-267a12f"
                  data-id="267a12f"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-9422b97 elementor-widget__width-auto elementor-widget-mobile__width-auto elementor-widget elementor-widget-shortcode"
                      data-id="9422b97"
                      data-element_type="widget"
                      data-widget_type="shortcode.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-shortcode"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4fc1eb0"
                  data-id="4fc1eb0"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-a55ff56 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                      data-id="a55ff56"
                      data-element_type="widget"
                      data-widget_type="icon.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-wrapper">
                          <div className="elementor-icon">
                            <i
                              aria-hidden="true"
                              className="fas fa-unlock-alt"
                            />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-dc6e7d1 elementor-widget__width-auto elementor-widget elementor-widget-shortcode"
                      data-id="dc6e7d1"
                      data-element_type="widget"
                      data-widget_type="shortcode.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-shortcode">
                          {" "}
                          {/* <span class="dashicons dashicons-unlock" style="top: 1px; font-size: 24px; margin-right: 4px;"></span> */}
                          <a
                            href="https://simplevedas.com/simple-login/?action=logout&redirect_to=%2Fredirect%2Fhome&_wpnonce=a09ab76e49"
                            style={{ color: "black", fontSize: 15 }}
                            data-no-instant=""
                          >
                            Logout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-09807ff elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="09807ff"
              data-element_type="section"
              id="mobile_login"
            >
              <div className="elementor-container elementor-column-gap-default">
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f497bd6"
                  data-id="f497bd6"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-add0f61 elementor-position-left elementor-widget__width-auto elementor-mobile-position-left elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
                      data-id="add0f61"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <a
                              href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjM3MjcwIiwidG9nZ2xlIjpmYWxzZX0%3D"
                              className="elementor-icon elementor-animation-"
                              tabIndex={-1}
                            >
                              <i aria-hidden="true" className="fas fa-key" />{" "}
                            </a>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <a href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjM3MjcwIiwidG9nZ2xlIjpmYWxzZX0%3D">
                                Register{" "}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-410f07c"
                  data-id="410f07c"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-187ddd0 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
                      data-id="187ddd0"
                      data-element_type="widget"
                      data-widget_type="icon.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-wrapper">
                          <div className="elementor-icon">
                            <i aria-hidden="true" className="fas fa-lock" />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-a34ff83 elementor-widget__width-auto tutor-open-login-modal elementor-hidden-desktop elementor-widget elementor-widget-shortcode"
                      data-id="a34ff83"
                      data-element_type="widget"
                      data-widget_type="shortcode.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-shortcode">
                          <a
                            className="paoc-popup-click paoc-popup-cust-25669 paoc-popup-simple_link paoc-popup-link"
                            href="javascript:void(0);"
                          >
                            Login
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0eb107d"
          data-id="0eb107d"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-e370ab1 elementor-widget__width-auto elementor-view-default elementor-widget elementor-widget-icon"
              data-id="e370ab1"
              data-element_type="widget"
              data-widget_type="icon.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                  <div className="elementor-icon">
                    <i aria-hidden="true" className="fas fa-heart" />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-6e9f1da elementor-widget__width-auto color-me elementor-widget elementor-widget-shortcode"
              data-id="6e9f1da"
              data-element_type="widget"
              data-widget_type="shortcode.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-shortcode">
                  {" "}
                  <a
                    className="paoc-popup-click paoc-popup-cust-26763 paoc-popup-button paoc-popup-btn "
                    href="javascript:void(0);"
                  >
                    Support Us
                  </a>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-a5aaad4 elementor-widget elementor-widget-shortcode"
              data-id="a5aaad4"
              data-element_type="widget"
              data-widget_type="shortcode.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-shortcode"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)
}