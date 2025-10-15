import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/simple-vedas-logo.png";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      className="elementor-section elementor-top-section elementor-element elementor-element-63ab213 elementor-section-height-min-height  d4189f66-3e69-4af9-8120-5b5c5f923b14 elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
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
                <Link
                  to="/"
                >
                  <img
                    src={Logo}
                    className="attachment-full size-full wp-image-19964"
                    alt="simpleVedaLogo"
                    sizes="(max-width: 562px) 100vw, 562px"
                  />{" "}
                </Link>
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
                    {/* Navlinks */}
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
                    {/* Nav links end */}
                    {/* Search  Icon */}
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
                      </form>
                    </li>
                  </ul>{" "}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)
}