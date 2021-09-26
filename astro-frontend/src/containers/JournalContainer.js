import { Component } from "react";
import NewJournal from '../components/NewJournal';
import NavBar from "../components/NavBar";

class JournalContainer extends Component {
    render() {
        return (
            <div className="form-container">
            <NavBar /><br/>
            <h2>New Transit Journal</h2><br/>
            <NewJournal />
            </div>
        )
    }
}

export default JournalContainer;