import React, { Component } from "react";
import { Row, Col, Container, Alert, Button } from "react-bootstrap";
import PayForm from "./PayForm";
import CardManagePage from "../Pages/CardManagePage";
import TransactionPage from "../Pages/TransactionPage";
import NavBarHome from "./NavBarHome";
import { findBalance } from "../Utils/utils";
class Functionalities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: findBalance()
    };
  }
  onChangeBalance() {
    this.setState({
      balance: findBalance()
    });
  }

  render() {
    return (
      <div>
        <NavBarHome onChangeConnection={this.props.onChangeConnection} />
        
      </div>
    );
  }
}

export default Functionalities;
/*

<Container>
          Balance : {this.state.balance}
          <Row>
            <Col>
              <TransactionPage
                onChangeBalance={this.onChangeBalance.bind(this)}
              />
            </Col>
            <Col>
              <PayForm
                isRenderByRouter={false}
                onChangeBalance={this.onChangeBalance.bind(this)}
              />
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col>
              {" "}
              <CardManagePage />
            </Col>
          </Row>
        </Container>

*/