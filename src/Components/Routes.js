import React from "react";
import HomePage from "../Pages/HomePage";
import UserInscriptionPage from "../Pages/UserInscriptionPage";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CardManagePage from "../Pages/CardManagePage";
import PayForm from "./PayForm";
import TransactionPage from "../Pages/TransactionPage";
import UserUpdatePage from "../Pages/UserUpdatePage";
export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route
                path="/pay"
                component={() => <PayForm isRenderByRouter={true} />}
            />
            <Route
                path="/transfert"
                component={() => <TransactionPage isRenderByRouter={true} />}
            />

            <Route
                path="/UserUpdatePage"
                component={() => (
                    <UserUpdatePage isRenderByRouter={true} isUpdate={true} />
                )}
            />
            <Route
                path="/UserInscription"
                component={() => (
                    <UserInscriptionPage
                        isRenderByRouter={true}
                        isUpdate={false}
                    />
                )}
            />
            <Route
                path="/CardManagePage"
                component={() => <CardManagePage isRenderByRouter={true} />}
            />
        </Switch>
    </BrowserRouter>
);
