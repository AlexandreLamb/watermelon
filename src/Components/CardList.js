import React, { Component } from 'react';
import { ListGroup ,ListGroupItem} from 'react-bootstrap';
import CardItem from '../Components/CardItem';
class CardList extends Component {
    constructor(props){
        super(props)
        this.state = {
            tabTest : ["test","to","testz","tzo","ztest","tdo"]
        }
    }
    
    render(){
        return(
            <div>
                <ListCards cards={this.props.cards}/>
            </div>
        )
    }


}
function ListCards(props){
    console.log(parseDate("2019-12-32"));
    return (
        <ListGroup>
                {props.cards.map(card => (
                    <ListGroupItem key={card.user + ""+ card.last_4}>
                        <CardItem
                        cvc={card.last_4}
                        expiry={parseDate(card.expired_at)}
                        name={card.user}
                        />
                    </ListGroupItem>
                ))}
            </ListGroup>
    )
    
}
function parseDate(date){
    date = date.toString();
    date = date.slice(2,7);
    return date.replace('-','/');
}
export default CardList;