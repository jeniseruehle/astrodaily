import { Component } from "react";
import MercuryTransits from "../components/MercuryTransits";
import MoonTransits from "../components/MoonTransits";
import NavBar from "../components/NavBar";
import SunTransits from "../components/SunTransits";


class PlanetContainer extends Component {
    render () {
        return (
            <div className="planet-container">
                <NavBar /><br />
                <h1><b>2021 Transit Events</b></h1><br />
                <SunTransits /><br />
                <MoonTransits /><br />
                <MercuryTransits /><br />
            </div>
        )
    }

}

export default PlanetContainer;