import Table from "react-bootstrap/Table";

const TransitKey = () => {
    return (
        <div>
            <h3>The Natal Houses</h3>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>House</th>
                        <th>Focus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1H (First)</td>
                        <td>The Self, Appearance</td>
                    </tr>
                    <tr>
                        <td>2H (Second)</td>
                        <td>Values, Possessions, Worth</td>
                    </tr>
                    <tr>
                        <td>3H (Third)</td>
                        <td>Communication, Learning</td>
                    </tr>
                    <tr>
                        <td>4H (Fourth)</td>
                        <td>Home, Emotions</td>
                    </tr>
                    <tr>
                        <td>5H (Fifth)</td>
                        <td>Creativity, Children</td>
                    </tr>
                    <tr>
                        <td>6H (Sixth)</td>
                        <td>Daily Routines, Health</td>
                    </tr>
                    <tr>
                        <td>7H (Seventh)</td>
                        <td>Relationships, Business</td>
                    </tr>
                    <tr>
                        <td>8H (Eighth)</td>
                        <td>Shared Resources, Transformation</td>
                    </tr>
                    <tr>
                        <td>9H (Ninth)</td>
                        <td>Philosophy, Travel, Expansion</td>
                    </tr>
                    <tr>
                        <td>10H (Tenth)</td>
                        <td>Career, Goals, Reputation</td>
                    </tr>
                    <tr>
                        <td>11H (Eleventh)</td>
                        <td>Friends, Community, Organizations</td>
                    </tr>
                    <tr>
                        <td>12H (Twelfth)</td>
                        <td>Retreat, Inner Self, Isolation</td>
                    </tr>
                </tbody>
                </Table><br />

                <h3>The Zodiac Signs</h3>
                <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Sign</th>
                        <th>Planetary Ruler</th>
                        <th>Archetype</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aries</td>
                        <td>Mars</td>
                        <td>The Warrior, Pioneer</td>
                    </tr>
                    <tr>
                        <td>Taurus</td>
                        <td>Venus</td>
                        <td>The Builder, Naturalist</td>
                    </tr>
                    <tr>
                        <td>Gemini</td>
                        <td>Mercury</td>
                        <td>The Communicator, Student</td>
                    </tr>
                    <tr>
                        <td>Cancer</td>
                        <td>Moon</td>
                        <td>The Nurturer, Protector</td>
                    </tr>
                    <tr>
                        <td>Leo</td>
                        <td>Sun</td>
                        <td>The Leader, Performer</td>
                    </tr>
                    <tr>
                        <td>Virgo</td>
                        <td>Mercury</td>
                        <td>The Crafter, Healer</td>
                    </tr>
                    <tr>
                        <td>Libra</td>
                        <td>Venus</td>
                        <td>The Mediator, Diplomat</td>
                    </tr>
                    <tr>
                        <td>Scorpio</td>
                        <td>Mars</td>
                        <td>The Transformer, Psychologist</td>
                    </tr>
                    <tr>
                        <td>Sagittarius</td>
                        <td>Jupiter</td>
                        <td>The Explorer, Teacher</td>
                    </tr>
                    <tr>
                        <td>Capricorn</td>
                        <td>Saturn</td>
                        <td>The Elder, Provider</td>
                    </tr>
                    <tr>
                        <td>Aquarius</td>
                        <td>Saturn</td>
                        <td>The Maverick, Innovator</td>
                    </tr>
                    <tr>
                        <td>Pisces</td>
                        <td>Jupiter</td>
                        <td>The Mystic, Dreamer</td>
                    </tr>
                </tbody>
                </Table><br />
        </div>
    )
}

export default TransitKey;