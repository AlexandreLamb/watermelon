import React, { Component } from "react";
import {
    Card,
    Container,
    Row,
    Col,
    Form,
    Button,
    Alert
} from "react-bootstrap";
import { returnUserId, returnCards } from "../Utils/utils";
class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: returnUserId(),
            last_4: props.last_4 ? props.last_4 : "",
            brand: props.brand ? props.brand : "Visa",
            expired_at: props.expired_at ? props.expired_at : "",
            id: props.id ? props.id : "",
            displayAlert: false,
            alertMessage: ""
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
        let date = new Date();
        let dateFormat =
            date.getFullYear() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate();
        if (this.state.last_4.length == 4) {
            if (this.state.expired_at > dateFormat) {
                let cards = returnCards();
                let idTab = [];
                cards.map(card => {
                    idTab.push(card.id);
                });
                this.state.id = idTab.length == 0 ? 1 : Math.max(...idTab) + 1;
                cards.push({
                    user_id: this.state.user_id,
                    last_4: this.state.last_4,
                    brand: this.state.brand,
                    expired_at: this.state.expired_at,
                    id: this.state.id
                });
                localStorage.setItem("Cards", JSON.stringify(cards));
                this.props.onChangeCard();
                this.setState({
                    displayAlert: false
                });
            } else {
                this.setState({
                    displayAlert: true,
                    alertMessage: "Please enter a valid date"
                });
            }
        } else {
            this.setState({
                displayAlert: true,
                alertMessage: "Please enter you'r 4 last card number"
            });
        }
    }
    updateCard(props) {
        let cards = returnCards();
        this.setState({
            id: this.props.card.id
        });
        cards.splice(this.props.cards.indexOf(this.props.card), 1, {
            user_id: this.state.user_id,
            last_4: this.state.last_4,
            brand: this.state.brand,
            expired_at: this.state.expired_at,
            id: this.state.id
        });
        localStorage.setItem("Cards", JSON.stringify(cards));
        this.props.onChangeCard();
    }
    onCloseAlert() {
        this.setState({
            displayAlert: false
        });
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
                                        <Form.Group
                                            as={Col}
                                            controlId="formGridState"
                                        >
                                            <Form.Control
                                                name="brand"
                                                value={this.state.brand}
                                                onChange={this.handleChange}
                                                as="select"
                                            >
                                                <option>Visa</option>
                                                <option>Master Card</option>
                                                <option>
                                                    American express
                                                </option>
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
                <AlertDismissibleExample
                    displayAlert={this.state.displayAlert}
                    onCloseAlert={this.onCloseAlert.bind(this)}
                    alertMessage={this.state.alertMessage}
                />
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
function AlertDismissibleExample(props) {
    if (props.displayAlert) {
        return (
            <Alert variant="danger" onClick={props.onCloseAlert} dismissible>
                {props.alertMessage}
            </Alert>
        );
    }
    return <div></div>;
}

export default AddCard;
