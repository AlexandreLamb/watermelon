import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import FormSearchUser from "./FormSearchUser";
import { checkId , findUserId} from "../Utils/utils";
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
      }
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
    let userIdOut = findUserId(localStorage.getItem("connectUser"));
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
        } else if (wallet.userId == userIdOut) {
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
    } else {
      alert("minimum transfert is 1 $");
    }
  }


  render() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>
                Transfers {this.state.amountTransfert} to{" "}
                {this.props.userSelect}{" "}
              </Form.Label>
              <Form.Control
                type="number"
                name="amountTransfert"
                value={this.state.amountTransfert}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button onClick={this.handleSubmit}>Transfers</Button>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Transaction;
