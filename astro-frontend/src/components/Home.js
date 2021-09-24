import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Jumbotron>
            <h1>AstroDaily</h1>
                <p>An app for astrologers and astrology enthusiasts to track your personal transits!</p>
                <p><Link to="/transits">
                    <Button variant="outline-dark">Go to Transits</Button>
                </Link></p>
        </Jumbotron>
    )
}

export default Home;