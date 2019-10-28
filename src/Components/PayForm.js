import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Pay from "./Pay";
import { findWallet, findBalance } from "../Utils/utils";
import NavBarHome from "../Components/NavBarHome";
class PayForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: localStorage.getItem("connectUser")
                ? JSON.parse(localStorage.getItem("connectUser"))
                : {},
            wallet: findWallet(JSON.parse(localStorage.getItem("connectUser"))),
            balance: findBalance()
        };
        this.onChangeBalance = this.onChangeBalance.bind(this);
    }
    onChangeBalance() {
        this.setState({
            balance: findBalance()
        });
    }
    renderGoBack() {
        if (this.props.isRenderByRouter) {
            return <NavBarHome />;
        }
    }

    render() {
        return (
            <div>
                {this.renderGoBack()}
                <Container>
                    Balance : {this.state.balance}
                    <Row>
                        <Col>
                            <Pay
                                mode="out"
                                isRenderByRouter={this.props.isRenderByRouter}
                                onChangeBalance={this.onChangeBalance}
                            />
                        </Col>
                        <Col>
                            <Pay
                                mode="in"
                                isRenderByRouter={this.props.isRenderByRouter}
                                onChangeBalance={this.onChangeBalance}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default PayForm;
