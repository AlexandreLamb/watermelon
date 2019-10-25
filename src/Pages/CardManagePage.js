import React, { Component } from "react";
import AddCard from "../Components/AddCard";
import { Link, useHistory, Route, NavLink } from "react-router-dom";
import CardList from "../Components/CardList";
import CardItem from "../Components/CardItem";
import { Container, Row, Col } from "react-bootstrap";
import NavBarHome from "../Components/NavBarHome";
class CardManagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: localStorage.getItem("Cards")
        ? JSON.parse(localStorage.getItem("Cards"))
        : []
    };
  }
  onChangeCard() {
    this.setState({
      cards: localStorage.getItem("Cards")
        ? JSON.parse(localStorage.getItem("Cards"))
        : []
    });
  }
  renderGoBack() {
    if (this.props.isRenderByRouter) {
      return (
        <NavBarHome/>
        );
    }
  }
  render() {
    return (
      <Container>
        {this.renderGoBack()}
        <Row>
          <Col>
            <AddCard mode="Add" onChangeCard={this.onChangeCard.bind(this)} />
          </Col>
          <Col>
            <Container>
              <CardList
                onChangeCard={this.onChangeCard.bind(this)}
                cards={this.state.cards}
              />
            </Container>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}
export default CardManagePage;
