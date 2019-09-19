import React from "react";
import HomePage from '../Pages/HomePage';
import UserInformationPage from '../Pages/UserInformationPage';
import { Route, Switch } from 'react-router-dom';

export default () =>
<Switch>
<Route exact path="/"
                    component={HomePage}
                    />
                    <Route path="/UserInformation"
                    component={UserInformationPage}
                    />
</Switch>