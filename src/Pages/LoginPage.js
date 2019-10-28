import React, { Component } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { Link} from "react-router-dom";
import { returnUsers } from "../Utils/utils";
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailCheck: false,
            displayAlert: false,
            alertMessage: ""
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
        let users = returnUsers();

        users.forEach(user => {
            if (
                this.state.email == user.email &&
                this.state.password == user.password
            ) {
                localStorage.setItem("connectUser", JSON.stringify(user));
                this.props.onChangeConnection(true);
            }
        });

        this.setState({
            displayAlert: true,
            alertMessage: "wrong connexion informations"
        });
    }
    onCloseAlert() {
        this.setState({
            displayAlert: false
        });
    }

    render() {
        return (
            <Container>
                <Form noValidate className="Container-Form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            isValid={this.state.email.includes("@")}
                        />
                        <Form.Control.Feedback>Tip top !</Form.Control.Feedback>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            {this.state.emailCheck}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Connect
                    </Button>
                    <Link variant="outline-success" to="/UserInscription">
                        Inscription
                    </Link>
                    <Alert variant="info">
                        Tips : use rigth clik and inspect to open devlopper
                        tool's and go to Application tabs to see the
                        localStorage and find users generate by an API{" "}
                    </Alert>
                    <AlertDismissibleExample
                        onCloseAlert={this.onCloseAlert.bind(this)}
                        displayAlert={this.state.displayAlert}
                        alertMessage={this.state.alertMessage}
                    />
                </Form>
            </Container>
        );
    }
}
function AlertDismissibleExample(props) {
    if (props.displayAlert) {
        return (
            <Alert variant="danger" onClick={props.onCloseAlert} dismissible>
                {props.alertMessage}
            </Alert>
        );
    }
    return <div></div>;
}
export default LoginPage;
