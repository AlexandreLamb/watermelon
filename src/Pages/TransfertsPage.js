import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Transfert from "../Components/Transfert";
class TransfertsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transferts: localStorage.getItem("Transfers")
        ? JSON.parse(localStorage.getItem("Transfers"))
        : []
    };
    this.findUserEmail = this.findUserEmail.bind(this)
  }
  findUserEmail(walletId){
    let wallets = JSON.parse(localStorage.getItem("Wallets"));
    let userId;
    let users =JSON.parse(localStorage.getItem("Users"));
    let userEmail ="";
    wallets.forEach(wallet => {
        if(wallet.id == walletId){
            userId = wallet.userId
        }
    });
    users.forEach(user => {
        if(user.id == userId){
            userEmail = user.email;
        }
    });
    return userEmail
  }
  render() {
    return (
      <div>
        <ListGroup size="30px">
          {" "}
          My Transferts
          {this.state.transferts.map(transfert => (
            <ListGroupItem key={transfert.id}>
              <Transfert
                amout={transfert.amout}
                to={this.findUserEmail(transfert.credited_wallet_id)}
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
export default TransfertsPage;
