import React, { Component } from "react";
import { Row, Col, Container, Alert, Button } from "react-bootstrap";
import PayForm from "./PayForm";
import CardManagePage from "../Pages/CardManagePage";
import TransactionPage from "../Pages/TransactionPage";
import NavBarHome from "./NavBarHome";
class Functionalities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBarHome onChangeConnection={this.props.onChangeConnection}/>
        <Container>
          <Row>
            <Col>
              <TransactionPage />
            </Col>
            <Col>
              <PayForm />
            </Col>
            <Col>
              <CardManagePage />
            </Col>
          </Row>
        </Container>{" "}
      </div>
    );
  }
}

export default Functionalities;
