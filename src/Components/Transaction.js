import React, { Component } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import FormSearchUser from "./FormSearchUser";
import { checkId, findUserId, findBalance } from "../Utils/utils";
class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountTransfert: 0,
            transfert: {
                id: 0,
                debited_wallet_id: 0,
                credited_wallet_id: 0,
                amout: 0
            },
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
        let userIdIn = findUserId(this.props.userSelect);
        let userOut = JSON.parse(localStorage.getItem("connectUser"));
        let wallets = JSON.parse(localStorage.getItem("Wallets"));
        let transferts = localStorage.getItem("Transfers")
            ? JSON.parse(localStorage.getItem("Transfers"))
            : [];
        let transfert = this.state.transfert;

        if (this.state.amountTransfert >= 1) {
            transfert.amout = this.state.amountTransfert * 100;
            transfert.id = checkId(transferts);
            wallets.forEach(wallet => {
                if (wallet.userId == userIdIn) {
                    wallet.balance += this.state.amountTransfert * 100;
                    transfert.credited_wallet_id = wallet.id;
                } else if (wallet.userId == userOut.id) {
                    wallet.balance -= this.state.amountTransfert * 100;
                    transfert.debited_wallet_id = wallet.id;
                }
            });
            this.setState({
                transfert: transfert
            });
            transferts.push(this.state.transfert);
            localStorage.setItem("Wallets", JSON.stringify(wallets));
            localStorage.setItem("Transfers", JSON.stringify(transferts));

            this.props.onChangeTransaction();
        } else {
          this.setState({
            displayAlert: true,
            alertMessage: "Minimum of transaction is 1 $"
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
                        <Form.Group>
                            <Form.Label>
                                Transfers {this.state.amountTransfert} $ to{" "}
                                {this.props.userSelect}{" "}
                            </Form.Label>
                            <Form.Control
                                type="number"
                                max={findBalance()}
                                min="0"
                                name="amountTransfert"
                                value={this.state.amountTransfert}
                                onChange={this.handleChange}
                            />
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
export default Transaction;
