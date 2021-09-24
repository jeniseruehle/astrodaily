import { Component } from "react";
import Form from "react-bootstrap/Form";
import { createTransit } from "../actions/transitActions"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class NewJournal extends Component {
    state = {
        title: "",
        event: "",
        sign: "",
        focus: "",
        mood: "",
        journal: "",
        date: "",
    }

    handleChange = (event) => {
        const title = event.target.title
        const value = event.target.value
        this.setState({
            [title]: value
        }, console.log(this.state))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createTransit(this.state)
        this.setState({
            title: "",
            event: "",
            sign: "",
            focus: "",
            mood: "",
            journal: "",
            date: "",
        })
    }

    render() {
        return (
            <div>
            Form!
            {/* <Form className="transit-form" onSubmit={this.handleSubmit}>

            </Form> */}
           </div>
        )
    }
}

export default connect(null, {createTransit})(NewJournal);