import Card from 'react-bootstrap/Card'

const TransitCard = (props) => {
   return (
    <Card classname="transit-card" border="dark" style={{width: '18rem'}}>
        <Card.Body>
            <Card.Title><i>{props.title}</i></Card.Title>
            <Card.Text>
                <b>Event:</b> {props.event}<br/>
                <b>Sign:</b> {props.sign}<br/>
                <b>Focus:</b> {props.focus}<br/>
                <b>Mood:</b> {props.mood}<br/>
                <b>Journal:</b> {props.journal}<br/>
                <b>Date:</b> {props.date}<br/>
            </Card.Text>
        </Card.Body>
    </Card>
   )
}

export default TransitCard;