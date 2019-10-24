import React from "react";
import UserInformationPage from '../Pages/UserInformationPage'
import HomePage from '../Pages/HomePage';
import UserInscriptionPage from '../Pages/UserInscriptionPage'
import { Route, Switch } from 'react-router-dom';
import CardManagePage from '../Pages/CardManagePage';
import LoginPage from "../Pages/LoginPage";
export default () =>
<Switch>
    <Route exact path="/"
    component={HomePage}/>
    <Route path="/home"
    component={HomePage}/>
    <Route path="/UserInformation"
    component={UserInformationPage}/>
    <Route path="/UserInscription"
    component={UserInscriptionPage}
    />
   <Route path="/CardManagePage"
    component={CardManagePage}
    />
</Switch>