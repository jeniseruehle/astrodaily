import Card from 'react-bootstrap/Card'

const TransitCard = (props) => {
   return (

    <div>
    <Card className="transit-card" border="dark" style={{width: "18rem"}}>
        <Card.Body>
            <Card.Title><i>{props.title}</i></Card.Title>
            <Card.Text>
                <b>Date:</b> {props.date}<br/>
                <b>Transit Event:</b> {props.event}<br/>
                {/* <b>Sign:</b> {props.sign}<br/> */}
                <b>Focus:</b> {props.focus}<br/>
                <b>Mood:</b> {props.mood}<br/>
                <b>Journal:</b> {props.journal}<br/>
            </Card.Text>
        </Card.Body>
    </Card>
    <br></br>
    </div>
   )
}

export default TransitCard;