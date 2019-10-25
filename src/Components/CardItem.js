import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Cards from "react-credit-cards";
import AddCard from "../Components/AddCard";
import {
    returnUserId,
    returnFullName,
    return4FirstCardNumber
} from "../Utils/utils";

import "react-credit-cards/es/styles-compiled.css";

class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItem: "infoCard"
        };
        this.updateNav = this.updateNav.bind(this);
    }
    updateNav(props) {
        this.setState({
            navItem: props
        });
    }
    render() {
        return (
            <div>
                <Nav variant="tabs" defaultActiveKey="infoCard">
                    <Nav.Item>
                        <Nav.Link
                            onClick={this.updateNav.bind(this, "infoCard")}
                        >
                            Info Card
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            onClick={this.updateNav.bind(this, "updateCard")}
                        >
                            {" "}
                            Update Card
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <DisplayCard
                    cvc={this.props.cvc}
                    expiry={this.props.expiry}
                    name={returnFullName(returnUserId())}
                    number=""
                    brand={this.props.brand}
                    navItem={this.state.navItem}
                    card={this.props.card}
                    cards={this.props.cards}
                    onChangeCard={this.props.onChangeCard}
                />
            </div>
        );
    }
}

function DisplayCard(props) {
    if (props.navItem == "infoCard") {
        let first_4 = return4FirstCardNumber(props.brand);
        return (
            <Cards
                cvc={props.cvc}
                expiry={parseDate(props.expiry)}
                name={props.name}
                number={first_4 + "**** ****" + props.cvc}
            />
        );
    } else {
        return (
            <div>
                <AddCard
                    mode="Update"
                    last_4={props.cvc}
                    expired_at={props.expiry}
                    brand={props.brand}
                    id={props.card.id}
                    card={props.card}
                    cards={props.cards}
                    onChangeCard={props.onChangeCard}
                />
            </div>
        );
    }
}
function parseDate(date) {
    date = date.toString();
    date = date.slice(2, 7);
    return date.replace("-", "/");
}

export default CardItem;
