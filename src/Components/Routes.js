import React from "react";
import UserInformationPage from "../Pages/UserInformationPage";
import HomePage from "../Pages/HomePage";
import UserInscriptionPage from "../Pages/UserInscriptionPage";
import { Route, Switch ,BrowserRouter} from "react-router-dom";
import CardManagePage from "../Pages/CardManagePage";
import LoginPage from "../Pages/LoginPage";
import PayForm from "./PayForm";
import TransactionPage from "../Pages/TransactionPage";
import NavBarHome from "./NavBarHome";
export default () => (
    <BrowserRouter>
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/home" component={HomePage} />
    <Route path="/pay" component={() => <PayForm isRenderByRouter={true} />} />
    <Route path="/transfert" component={()=> <TransactionPage isRenderByRouter={true} />} />

    <Route path="/UserInformation" component={()=> <UserInformationPage isRenderByRouter={true} />} />
    <Route path="/UserInscription" component={UserInscriptionPage} />
    <Route path="/CardManagePage" component={() => <CardManagePage isRenderByRouter={true} />} />
  </Switch>
  </BrowserRouter>
);
