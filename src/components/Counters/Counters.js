import { React } from "react";
import { Card} from 'react-bootstrap';
import './Counter.css';

const Counter = (props) => {
    //console.log("card props= ", props);
    return(
        <div onClick={() => props.applyFilter(props.name)} tabIndex={props.name}>
            <Card
            bg="light"
            text="black"
            style={{ height: 90, width: 100, flex: 1 , marginRight: 10}}
            className="mb-2"
        >
            <Card.Header style={{height: 40}}>{props.name}</Card.Header>
            <Card.Body>
            <Card.Title>{props.counter}</Card.Title>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Counter;