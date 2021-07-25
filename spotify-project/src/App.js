// import logo from './logo.svg';
import "./App.css";
import Welcome from "./components/Welcome";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Row,
  Col,
} from "reactstrap";
import Spotify_Icon from "./Spotify_Icon.png";
import analyze from "./analysis.png";
import result from "./result.png";

function App() {
  return (
    <>
      {/* <div className="Nav">
        <Navbar expand="md">
          <NavbarBrand href="/">Spotify Project</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/"></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div> */}
      <div className="App">
        <header className="">
          <p>
            <Welcome />
            <Container>
              <div className="rows">
                <h1 className="para">
                  How does it work ?
                </h1>
                <Row>
                  <Col>
                    <img
                      src={Spotify_Icon}
                      width="100px"
                      height="100px"
                      className="top"
                    ></img>
                    <h2>Connect</h2>
                    <p className="para">
                      Connect your Spotify Account and grant access.
                    </p>
                  </Col>
                  <Col>
                    <img
                      src={analyze}
                      width="100px"
                      height="100px"
                      className="top"
                    ></img>
                    <h2>Analyze</h2>
                    <p className="para">
                      It will connect to the spotify API and analyze your
                      account's data.
                    </p>
                  </Col>
                  <Col>
                    <img
                      src={result}
                      width="100px"
                      height="100px"
                      className="top"
                    ></img>
                    <h2>Result</h2>
                    <p className="para">
                      After analyzing the data, the page will show you yur data.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
