/**
 * External dependencies.
 */
import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

/**
 * Internal dependencies.
 */
import { aboutData } from "../../assets/apiData/personalData";

const NavigationBar = (props) => {
    const [pageTitle, setPageTitle] = useState("");
    const currentPath = props.history.location.pathname;
    const about = aboutData()

    useEffect(() => {
        getCurrentPageTitle();
    }, [props, currentPath]);

    const navLinkCSS = (path) => {
        let navCSS = "nav-item nav-link";
        if (currentPath === path) {
            navCSS += " active";
        }
        return navCSS;
    };

    const getCurrentPageTitle = () => {
        let title = "";
        const { pathname } = props.history.location;

        switch (pathname) {
            case "/cv":
                title = "Curriculum Vitae";
                break;
            case "/portfolio":
                title = "My Portfolios";
                break;
            case "/about":
                title = "About Me";
                break;
            case "/skills":
                title = "Skills";
                break;
            case "/contact":
                title = "Contact Me";
                break;
            case "/blog":
                title = "Blog";
                break;
            default:
                title = '';
                break;
        }
        if (pathname === "/") {
            setPageTitle("");
        } else {
            setPageTitle(title + " |");
        }
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${pageTitle} ${about.name}`}</title>
                <link rel="canonical" href="/" />
                <link rel="shortcut icon" href={about.favicon} type="image/x-icon" />
            </Helmet>

            <Navbar
                collapseOnSelect
                expand="lg"
                variant="dark"
                className="navbar-expand-lg navbar-dark"
                id="mainNav"
            >
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        {about.name}
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <li className="nav-item">
                                <Link to="/portfolio" className={navLinkCSS("/portfolio")}>
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className={navLinkCSS("/about")}>
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/skills" className={navLinkCSS("/skills")}>
                                    Skills
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className={navLinkCSS("/blog")}>
                                    Blogs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cv" className={navLinkCSS("/cv")}>
                                    CV
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className={navLinkCSS("/contact")}>
                                    Contact
                                </Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
};

export default withRouter(NavigationBar);
