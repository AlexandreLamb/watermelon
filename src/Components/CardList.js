import React, { Component } from 'react';
import { ListGroup ,ListGroupItem, Button} from 'react-bootstrap';
import CardItem from '../Components/CardItem';
class CardList extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.deleteCard = this.deleteCard.bind(this);
    }
    deleteCard(card){
        console.log(this.props.cards.indexOf(card))
        this.props.cards.splice(this.props.cards.indexOf(card), 1);
        console.log(this.props.cards)
        localStorage.setItem("Cards",JSON.stringify(this.props.cards));
        this.props.onChangeCard()
        
    }
    
    
    render(){
        return(
            <div>
                <ListCards cards={this.props.cards} deleteCard={this.deleteCard}/>
            </div>
        )
    }


}
function ListCards(props){
    return (
        <ListGroup>
                {props.cards.map(card => (
                    <ListGroupItem key={card.id}>
                       <Button onClick={props.deleteCard.bind(this, card)}>Delete</Button>
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