import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import FormSearchUser from "./FormSearchUser";
import Transaction from "./Transaction";
class TransactionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelect: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onChangeUserSelect(props) {
        this.setState({
            userSelect: props
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <FormSearchUser
                                onChangeUserSelect={this.onChangeUserSelect.bind(
                                    this
                                )}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DisplayTransaction
                                onChangeTransaction={
                                    this.props.onChangeTransaction
                                }
                                userSelect={this.state.userSelect}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
function DisplayTransaction(props) {
    if (props.userSelect == "") {
        return <div></div>;
    } else {
        return (
            <Transaction
                onChangeTransaction={props.onChangeTransaction}
                userSelect={props.userSelect}
            />
        );
    }
}
export default TransactionForm;
