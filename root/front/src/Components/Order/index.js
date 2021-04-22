import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'

export default function Order(props){

    return(
        <div>
            <Card>
                <Card.Img variant="top" src="" />
                <Card.Body style={{ height : '8rem' }}>
                    <Card.Title>{props.title}</Card.Title>
                    
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Nombre: {props.namePet}</ListGroupItem>
                    <ListGroupItem>Edad: {props.age}</ListGroupItem>
                    <ListGroupItem style={{ height : '8rem' }}>Dirección: {props.address},{props.city},{props.state}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Más información</Card.Link>
                    <Card.Link href="#">Adoptar  </Card.Link>
                </Card.Body>    
            </Card>
        </div>
    )
}