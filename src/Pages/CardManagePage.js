import React, { Component } from "react";
import AddCard from "../Components/AddCard";
import CardList from "../Components/CardList";
import { Container, Row, Col } from "react-bootstrap";
import NavBarHome from "../Components/NavBarHome";
import { returnUserCards } from "../Utils/utils";
class CardManagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: returnUserCards()
        };
    }
    onChangeCard() {
        this.setState({
            cards: localStorage.getItem("Cards")
                ? JSON.parse(localStorage.getItem("Cards"))
                : []
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
                    <Row>
                        <Col>
                            <AddCard
                                mode="Add"
                                onChangeCard={this.onChangeCard.bind(this)}
                            />
                        </Col>
                        <Col>
                            <Container>
                                <CardList
                                    onChangeCard={this.onChangeCard.bind(this)}
                                    cards={this.state.cards}
                                />
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default CardManagePage;
