import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
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
                <NavBarHome
                    onChangeConnection={this.props.onChangeConnection}
                />
                <Container>
                    <Row>
                        <Col>Package npm use</Col>
                    </Row>
                    <Row>
                        <Col>bootstrap</Col>
                    </Row>
                    <Row>
                        <Col>
                            axios ( use for get the user ramdomnly with the api
                            : https://randomuser.me/ )
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            react-credit-cards (use for display style credit
                            card :
                            https://github.com/amarofashion/react-credit-cards )
                        </Col>
                    </Row>
                    <Row>
                        <Col>react-router-dom</Col>
                    </Row>{" "}
                </Container>
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
