import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Dropdown,
  ButtonGroup,
  Form,
  FormControl,
  Offcanvas,
} from "react-bootstrap";

import Logo from "./naviImg/logo2.png";
import { Link } from "react-router-dom";
import styles from "./styles/navi.module.css";
import classNames from "classnames/bind";

const ss = classNames.bind(styles);

const Navi = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className={styles.header}
    >
      <Container>
        <Navbar.Brand className={ss("logo")}>
          <Link to="/">
            <img src={Logo} alt="Logo" width="130px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" placement="end" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={classNames( "me-auto", ss("nav_wrap"))} >
            <Nav.Link>
              <Link to="/History" className={ss("navItem")}>
                History
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Manufacture" className={ss("navItem")}>
                Manufacture
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/aboutUs" className={ss("navItem")}>
                AboutUs
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Recipe" className={ss("navItem")}>
                Recipe
              </Link>
            </Nav.Link>
            <NavDropdown
              title="Prouduts"
              id="collasible-nav-dropdown"
              className={styles.dropNav}
            >
              <NavDropdown.Item className={ss("dropBox")}>
                <Link to="/Fiat" className={ss("dropItem")}>
                  Fiat
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Scorza" className={ss("dropItem")}>
                  Scorza
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/Tortellini" className={ss("dropItem")}>
                  Tortellini
                </Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item>
                <Link to="/MARACAIBO" className={ss("dropItem")}>
                  Maracaibo
                </Link>
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/Login" className={ss("login")}>
            Login
              </Link>
            </Nav.Link>
            <Nav.Link >
              <Link to="/SignUp" className={ss("signup")}>
              SignUp
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navi;
