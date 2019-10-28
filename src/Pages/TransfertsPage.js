import React, { Component } from "react";
import { ListGroup, ListGroupItem, Container, Row, Col } from "react-bootstrap";
import Transfert from "../Components/Transfert";
class TransfertsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.findUserEmail = this.findUserEmail.bind(this);
    }
    findUserEmail(walletId) {
        let wallets = JSON.parse(localStorage.getItem("Wallets"));
        let userId;
        let users = JSON.parse(localStorage.getItem("Users"));
        let userEmail = "";
        wallets.forEach(wallet => {
            if (wallet.id == walletId) {
                userId = wallet.userId;
            }
        });
        users.forEach(user => {
            if (user.id == userId) {
                userEmail = user.email;
            }
        });
        return userEmail;
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <ListGroup size="30px">
                                My Transferts In
                                {this.props.transfertsIn.map(transfert => (
                                    <ListGroupItem key={transfert.id}>
                                        <Transfert
                                            amout={transfert.amout/100}
                                            from={this.findUserEmail(
                                                transfert.debited_wallet_id
                                            )}
                                            mode="in"
                                        />
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup size="30px">
                                My Transferts Out
                                {this.props.transfertsOut.map(transfert => (
                                    <ListGroupItem key={transfert.id}>
                                        <Transfert
                                            amout={transfert.amout/100}
                                            mode="out"
                                            to={this.findUserEmail(
                                                transfert.credited_wallet_id
                                            )}
                                        />
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default TransfertsPage;
/*

<ListGroup size="30px">
                My Transferts
                {this.props.transfertsIn.map(transfert => (
                  <ListGroupItem key={transfert.id}>
                    <Transfert
                      amout={transfert.amout}
                      to={this.findUserEmail(transfert.credited_wallet_id)}
                      from={this.findUserEmail(transfert.debited_wallet_id)}
                    />
                  </ListGroupItem>
                ))}
              </ListGroup>

*/
