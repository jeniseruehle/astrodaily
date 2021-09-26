import Table from "react-bootstrap/Table";

const SunTransits = () => {
    return (
        <div className="table">
            <h2>Sun ☀️</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Transit</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sun in Libra</td>
                        <td>September 22nd</td>
                    </tr>
                    <tr>
                        <td>Sun in Scorpio</td>
                        <td>October 23rd</td>
                    </tr>
                    <tr>
                        <td>Sun in Sagittarius</td>
                        <td>November 22nd</td>
                    </tr>
                    <tr>
                        <td>Sun in Capricorn</td>
                        <td>December 21st</td>
                    </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default SunTransits;