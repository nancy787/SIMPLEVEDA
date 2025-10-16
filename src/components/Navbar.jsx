import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/simple-vedas-logo.png";
import { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react"; // npm install hamburger-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About ▼" },
    { path: "/courses", name: "Courses" },
    { path: "/quotes", name: "Quotes" },
    { path: "/Shop", name: "Shop" },
    { path: "/contact", name: "Contact" },
  ];

  // Close menu when resizing above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-63ab213 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
        data-id="63ab213"
        data-element_type="section"
      >
        {/* ✅ Custom Styles */}
        <style>{`
          /* ✅ Burger Visibility */
          .custom-burger {
            display: none;
            position: absolute;
            right: 20px;
            top: 20px;
            z-index: 999;
          }

          @media (max-width: 768px) {
            .custom-burger {
              display: block;
            }
          }

          /* ✅ Mobile Dropdown */
          .custom-mobile-menu {
            position: absolute;
            top: 60px;
            right: 20px;
            width: 180px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 9999;
          }

          .custom-mobile-menu ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .custom-mobile-menu li a {
            display: block;
            padding: 10px 15px;
            color: #333;
            text-decoration: none;
          }

          .custom-mobile-menu li a:hover {
            background-color: #f5f5f5;
            color: #b67d2a;
          }

          .custom-mobile-menu li a.active {
            color: #b67d2a;
            font-weight: 600;
          }
        `}</style>

        <div className="elementor-container elementor-column-gap-default" style={{ position: "relative" }}>
          {/* Existing Logo */}
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
              >
                <div className="elementor-widget-container"
                >
                  <Link to="/">
                    <img
                      src={Logo}
                      className="attachment-full size-full wp-image-19964"
                      alt="simpleVedaLogo"
                      sizes="(max-width: 562px) 100vw, 562px"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Existing Elementor Nav (untouched) */}
          <div
            className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-07500ed"
            data-id="07500ed"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-7b540e1 elementor-nav-menu__align-right elementor-widget elementor-widget-nav-menu"
                data-id="7b540e1"
                data-element_type="widget"
              >
                <div className="elementor-widget-container">
                   <style>{`
    /* Hide Elementor desktop nav on mobile */
    @media (max-width: 768px) {
      .elementor-nav-menu--main {
        display: none !important;
      }
    }

    /* Optional: show on desktop only */
    @media (min-width: 769px) {
      .elementor-nav-menu--main {
        display: block !important;
      }
    }
  `}</style>
                  <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal">
                    <ul className="elementor-nav-menu">
                      {navLinks.map((link) => (
                        <li key={link.path} className="menu-item">
                          <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                              isActive
                                ? "elementor-item elementor-item-active"
                                : "elementor-item"
                            }
                          >
                            {link.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Custom Hamburger (separate, not overriding Elementor) */}
          <div className="custom-burger">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={22} />
            {isOpen && (
              <div className="custom-mobile-menu">
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
