import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import About from "./pages/About"
import Airbnb from "./projects/Airbnb"
import BaseCamp from "./projects/BaseCamp"
import Code from "./pages/Code"
import Design from "./pages/Design"
import Error from "./pages/FourOhFourError"
import JPS from "./projects/JointPressureSleeve"
import LightBar from "./projects/LightBar"
import Portfolio from "./projects/PortfolioRedesign"
import SeattleTransit from "./projects/SeattleTransit";
import TwitterTrends from  "./projects/TwitterTrends"
import Upcoming from "./pages/Upcoming"
import WSWS from "./projects/WSWS"

export default function Routing() {
    return <Switch>
        <Route path="/" exact component={Design} />
        <Route path="/design" exact><Redirect to ="/"/></Route>
        <Route path="/about" component={About} />
        <Route path="/code" exact component={Code} />
        <Route path="/code/airbnb" exact component={Airbnb} />
        <Route path="/code/TwitterTrends" component={TwitterTrends} />
        <Route path="/code/LightBar" component={LightBar} />
        <Route path="/design/SeattleTransit" component={SeattleTransit} />
        <Route path="/design/BaseCamp" component={BaseCamp} />
        <Route path="/design/WestSoundWildlifeShelter" component={WSWS} />
        <Route path="/design/PortfolioRedesign" component={Portfolio} />
        <Route path="/projects/JointPressureSleeve" component={JPS} />
        <Route path="*" component={Error}/>
    </Switch>
}