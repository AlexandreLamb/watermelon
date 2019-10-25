import React, { Component } from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { returnUserId } from "../Utils/utils";
class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: returnUserId(JSON.parse(localStorage.getItem("connectUser"))),
      last_4: props.last_4 ? props.last_4 : "",
      brand: props.brand ? props.brand : "",
      expired_at: props.expired_at ? props.expired_at : "",
      id: ""
    };
    this.registerCard = this.registerCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateCard = this.updateCard.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  registerCard(props) {
    let cards = localStorage.getItem("Cards")
      ? JSON.parse(localStorage.getItem("Cards"))
      : [];
    let idTab = [];
    cards.map(card => {
      idTab.push(card.id);
    });
    this.state.id = idTab.length == 0 ? 1 : Math.max(...idTab) + 1;
    cards.push(this.state);
    localStorage.setItem("Cards", JSON.stringify(cards));
    this.props.onChangeCard();
  }
  updateCard(props) {
    let cards = localStorage.getItem("Cards")
      ? JSON.parse(localStorage.getItem("Cards"))
      : [];
    cards.splice(this.props.cards.indexOf(this.props.card), 1, this.state);
    localStorage.setItem("Cards", JSON.stringify(cards));
    this.props.onChangeCard();
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <TitleMode mode={this.props.mode} />
            <Form>
              <Container>
                <Row>
                  <Col>
                    <Form.Control
                      name="last_4"
                      onChange={this.handleChange}
                      value={this.state.last_4}
                      placeholder="Last four"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      name="expired_at"
                      value={this.state.expired_at}
                      onChange={this.handleChange}
                      type="date"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Control
                        name="brand"
                        value={this.state.brand}
                        onChange={this.handleChange}
                        as="select"
                      >
                        <option>Visa</option>
                        <option>Master Card</option>
                        <option>American express</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      variant="primary"
                      onClick={
                        this.props.mode == "Add"
                          ? this.registerCard
                          : this.updateCard
                      }
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
function TitleMode(props) {
  if (props.mode == "Add") {
    return <Card.Title>Add Card</Card.Title>;
  } else {
    return <Card.Title>Update Card</Card.Title>;
  }
}

export default AddCard;
