import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Pay from "./Pay";
import {  findWallet } from "../Utils/utils";
class PayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : localStorage.getItem("connectUser") ? JSON.parse(localStorage.getItem("connectUser")) : {},
      wallet : findWallet(JSON.parse(localStorage.getItem("connectUser"))),
    };
    
  }
  onChangeBalance(){
    console.log("hey")
  }
  

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Pay mode="out" isRenderByRouter={this.props.isRenderByRouter} onChangeBalance={this.props.onChangeBalance} />
            </Col>
            <Col>
              <Pay mode="in" isRenderByRouter={this.props.isRenderByRouter} onChangeBalance={this.props.onChangeBalance} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
function DisplayPay(props){
  if(props.isRenderByRouter){
    return (
      <Container>
          <Row>
            <Col>
              <Pay mode="out" onChangeBalance={props.onChangeBalance} />
            </Col>
            <Col>
              <Pay mode="in" onChangeBalance={props.onChangeBalance} />
            </Col>
          </Row>
        </Container>
    );
  }else {
    return (
      <Container>
          <Row>
            <Col>
              <Pay mode="out" onChangeBalance={this.props.onChangeBalance} />
            </Col>
            <Col>
              <Pay mode="in" onChangeBalance={this.props.onChangeBalance} />
            </Col>
          </Row>
        </Container>
    )
  }
}

export default PayForm;
