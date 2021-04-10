// import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
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
  NavbarText
} from 'reactstrap';

function App() {
  return (

    <>
    <div className = "Nav">
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Spotify Project</NavbarBrand>
      <NavbarToggler  />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">Sign Up</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">Login</NavLink>
          </NavItem>
        </Nav>
    
      </Collapse>
    </Navbar>
  </div>
    <div className="App">
  
      <header className="">
        <p>
         <Welcome />
        </p>
      </header>
    </div>
    </>
  );
}

export default App;
