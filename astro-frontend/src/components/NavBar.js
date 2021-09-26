import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const NavBar = () => {
    return (
        <Nav variant="tabs" defaultActiveKey="/transits">
          
            <Nav.Item>
                <Nav.Link as={Link} to="/">
                    <Button variant="outline-light">Home</Button>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={Link} to="/transits">
                    <Button variant="outline-light">Your Transits</Button>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={Link} to="/transits/new">
                    <Button variant="outline-light">Transit Journal</Button>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={Link} to="/transits/planets">
                    <Button variant="outline-light">Upcoming Transits</Button>
                </Nav.Link>
            </Nav.Item>

        </Nav>
    )
}

export default NavBar;