import { Component } from "react";
import Form from "react-bootstrap/Form";
import { createTransit } from "../actions/transitActions"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class NewJournal extends Component {
    state = {
        title: "",
        event: "",
        focus: "",
        mood: "",
        journal: "",
        date: "",
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        }, console.log(this.state))
    }

    handleSubmit = (event) => {
        alert('Success! ✨');
        event.preventDefault();
        this.props.createTransit(this.state)
        this.setState({
            title: "",
            event: "",
            focus: "",
            mood: "",
            journal: "",
            date: "",
        });
        this.props.history.push('/transits');
        window.location.reload();
    }

    render() {
        return (
            <Form className="transit-form" onSubmit={this.handleSubmit}>
                <Form.Group> 
                <Form.Label className="label">Title:</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter a journal title" onChange={this.handleChange} value={this.state.title}/> 
                </Form.Group>

                <Form.Group>
                <Form.Label className="label">Date:</Form.Label> &nbsp;
                <Form.Control type="text" name="date" placeholder="Enter today's date or event date" onChange={this.handleChange} value={this.state.date}/>  
                </Form.Group>

                <Form.Group>  
                <Form.Label className="label">Transit (see <Link to="/transits/planets" style={{color: '#FFF', textDecoration: 'underline'}}>Upcoming</Link>):</Form.Label>
                <Form.Control type="text" name="event" placeholder="Enter planetary event" onChange={this.handleChange} value={this.state.event}/>
                </Form.Group>

                <Form.Group>
                <Form.Label className="label">Focus (see <Link to="/transits/key" style={{color: '#FFF', textDecoration: 'underline'}}>Key</Link>):</Form.Label> &nbsp;
                <Form.Control type="text" name="focus" placeholder="Enter house where planetary event is happening" onChange={this.handleChange} value={this.state.focus}/>
                </Form.Group>

                <Form.Group>
                <Form.Label className="label">Mood:</Form.Label> &nbsp;
                <Form.Control type="text" name="mood" placeholder="How do you feel?" onChange={this.handleChange} value={this.state.mood}/>
                </Form.Group>

                <Form.Group>
                <Form.Label className="label">Journal:</Form.Label>
                <Form.Control as="textarea" name="journal" rows={3} placeholder="Any observations? Write about it!" onChange={this.handleChange} value={this.state.journal}/>  
                <br/>
                </Form.Group>

            <input type="submit" value="Submit Journal"/>
            </Form>
        )
    }
}

export default connect(null, {createTransit})(withRouter(NewJournal));