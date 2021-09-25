import { Component } from "react";
import TransitCard from "../components/TransitCard";
import { connect } from "react-redux";
import { fetchTransits } from "../actions/transitActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../components/NavBar";

class TransitsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchTransits()
    }

    renderTransitCards() {
        return this.props.transits.map(transit => 
        <TransitCard
            key={transit.id}
            id={transit.id}
            title={transit.title}
            event={transit.event}
            sign={transit.sign}
            focus={transit.focus}
            mood={transit.mood}
            journal={transit.journal}
            date={transit.date}
        />)
    }

    render() {
        return (
            <div>
            <NavBar /><br />
            <h2>Your Transits</h2>
            <Container>
                <Row>
                {this.renderTransitCards()}
                </Row>
            </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transits: state.transits
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTransits: () => dispatch(fetchTransits())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransitsContainer);