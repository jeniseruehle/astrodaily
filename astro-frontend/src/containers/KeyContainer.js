import { Component } from "react";
import NavBar from "../components/NavBar";
import TransitKey from "../components/TransitKey";

class KeyContainer extends Component {
    render() {
        return (
            <div className="transit-key">
            <NavBar /><br />
            <h2>Focus Areas (Houses)</h2><br/>
            <TransitKey />
            </div>
        )
    }
}

export default KeyContainer;