import {Navbar, Nav} from 'react-bootstrap';
import './navigation-bar.styles.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const NavigationBar = () => (
    <div className="customNav">
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="/">
                <Logo className="img-fluid"/>          
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" activeKey={window.location.pathname}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/liquidity">FX & CFD Liquidity</Nav.Link>
                    <Nav.Link href="/clients">Our Clients</Nav.Link>
                    <Nav.Link href="/story">Our Story</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>

);

export default NavigationBar;