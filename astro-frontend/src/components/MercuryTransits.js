import Table from "react-bootstrap/Table";

const MercuryTransits = () => {
    return (
        <div className="table">
            <h3>Mercury ☿️</h3>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Transit</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mercury Rx in Libra</td>
                        <td>September 27th</td>
                    </tr>
                    <tr>
                        <td>Mercury Direct in Libra</td>
                        <td>October 18th</td>
                    </tr>
                    <tr>
                        <td>Mercury in Scorpio</td>
                        <td>November 6th</td>
                    </tr>
                    <tr>
                        <td>Mercury in Sagittarius</td>
                        <td>November 25th</td>
                    </tr>
                    <tr>
                        <td>Mercury in Capricorn</td>
                        <td>December 14th</td>
                    </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default MercuryTransits;