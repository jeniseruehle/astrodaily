import Table from "react-bootstrap/Table";

const MoonTransits = () => {
    return (
        <div className="table">
            <h3>Moon 🌙 </h3>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>Transit</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Full Moon in Pisces</td>
                        <td>September 20th</td>
                    </tr>
                    <tr>
                        <td>New Moon in Libra</td>
                        <td>October 6th</td>
                    </tr>
                    <tr>
                        <td>Full Moon in Aries</td>
                        <td>October 20th</td>
                    </tr>
                    <tr>
                        <td>New Moon in Scorpio</td>
                        <td>November 4th</td>
                    </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default MoonTransits;