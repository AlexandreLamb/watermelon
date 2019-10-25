import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button, Nav } from "react-bootstrap";
import CardItem from "../Components/CardItem";
import { returnFullName } from "../Utils/utils";
class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.deleteCard = this.deleteCard.bind(this);
  }

  deleteCard(card) {
    this.props.cards.splice(this.props.cards.indexOf(card), 1);
    localStorage.setItem("Cards", JSON.stringify(this.props.cards));
    this.props.onChangeCard();
  }

  render() {
    return (
      <div>
        <ListCards
          cards={this.props.cards}
          deleteCard={this.deleteCard}
          onChangeCard={this.props.onChangeCard}
        />
      </div>
    );
  }
}
function ListCards(props) {
  return (
    <ListGroup size="30px">
      {props.cards.map(card => (
        <ListGroupItem key={card.id}>
          <Button
            variant="danger"
            size="sm"
            onClick={props.deleteCard.bind(this, card)}
          >
            X
          </Button>
          <CardItem
            cvc={card.last_4}
            expiry={card.expired_at}
            name={returnFullName(card.user)}
            card={card}
            cards={props.cards}
            brand={card.brand}
            onChangeCard={props.onChangeCard}
          />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
export default CardList;
