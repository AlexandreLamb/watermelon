import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Pay from "./Pay";
import {  findWallet } from "../Utils/utils";
class PayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : localStorage.getItem("connectUser") ? JSON.parse(localStorage.getItem("connectUser")) : {},
      wallet : findWallet(JSON.parse(localStorage.getItem("connectUser")))
    };
  }
  onChangeBalance(){
    this.setState({
      wallet : findWallet(JSON.parse(localStorage.getItem("connectUser")))
    })
  }

  render() {
    return (
      <div>
        <Container>
          Balance : {this.state.wallet.balance}
          <Row>
            <Col>
              <Pay mode="out" onChangeBalance={this.onChangeBalance.bind(this)} />
            </Col>
            <Col>
              <Pay mode="in" onChangeBalance={this.onChangeBalance.bind(this)} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PayForm;
