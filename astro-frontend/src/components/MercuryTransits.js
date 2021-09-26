import Table from "react-bootstrap/Table";

const MercuryTransits = () => {
    return (
        <div className="table">
            <h2>Mercury ☿️</h2>
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
                        <td>Mercury Direct in Virgo</td>
                        <td>October 18th</td>
                    </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default MercuryTransits;