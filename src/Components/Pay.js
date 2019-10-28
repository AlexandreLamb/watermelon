import React, { Component } from "react";
import {
    Form,
    Button,
    Container,
    InputGroup,
    Col,
    Alert
} from "react-bootstrap";
import { findBalance, returnCards } from "../Utils/utils";
class Pay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amout: 0,
            displayAlert: false,
            alertMessage: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit() {
        if (returnCards().length != 0) {
            if (this.state.amout >= 1) {
                let wallets = JSON.parse(localStorage.getItem("Wallets"));
                let user = JSON.parse(localStorage.getItem("connectUser"));
                wallets.forEach(wallet => {
                    if (wallet.userId == user.id) {
                        if (this.props.mode == "in") {
                            wallet.balance += this.state.amout * 100;
                        } else {
                            if (wallet.balance - this.state.amout >= 0) {
                                wallet.balance -= this.state.amout * 100;
                            } else {
                                this.setState({
                                    displayAlert: true,
                                    alertMessage:
                                        "Minimum of pay out is what you have on you'r balance"
                                });
                            }
                        }
                    }
                });
                localStorage.setItem("Wallets", JSON.stringify(wallets));
                this.props.onChangeBalance();
            } else {
                this.setState({
                    displayAlert: true,
                    alertMessage: "Minimum of transaction is 1 $"
                });
            }
        } else {
            this.setState({
                displayAlert: true,
                alertMessage: "You have to add a least 1 card for do transfert"
            });
        }
    }
    onCloseAlert() {
        this.setState({
            displayAlert: false
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <Form.Group as={Col} controlId="form">
                            <PayLabel mode={this.props.mode} />
                            <InputGroup>
                                <Form.Control
                                    type="number"
                                    min="0"
                                    max={
                                        this.props.mode == "out"
                                            ? findBalance()
                                            : ""
                                    }
                                    name="amout"
                                    value={this.state.amout}
                                    onChange={this.handleChange}
                                />
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">
                                        $
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Form.Group>
                        <Button onClick={this.handleSubmit}>Transfers</Button>
                    </Form>
                </Container>
                <AlertDismissibleExample
                    displayAlert={this.state.displayAlert}
                    onCloseAlert={this.onCloseAlert.bind(this)}
                    alertMessage={this.state.alertMessage}
                />
            </div>
        );
    }
}
function PayLabel(props) {
    if (props.mode == "in") {
        return <Form.Label>Pay in</Form.Label>;
    } else {
        return <Form.Label>Pay out</Form.Label>;
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

export default Pay;
