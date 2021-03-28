import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Upcoming from "./pages/Upcoming"
import Error from "./pages/FourOhFourError"
import Code from "./pages/Code"
import About from "./pages/About"
import Design from "./pages/Design"
import SeattleTransit from "./projects/SeattleTransit";
import BaseCamp from "./projects/BaseCamp"
import WSWS from "./projects/WSWS"
import Portfolio from "./projects/PortfolioRedesign"
import JPS from "./projects/JointPressureSleeve"
import TwitterTrends from  "./projects/TwitterTrends"

export default function Routing() {
    return <Switch>
        <Route path="/" exact component={Design} />
        <Route path="/design" exact>
            <Redirect to ="/"/>
        </Route>
        <Route path="/about" component={About} />
        <Route path="/code" exact component={Code} />
        <Route path="/code/airbnb" exact component={Upcoming} />
        <Route path="/code/TwitterTrends" component={TwitterTrends} />
        <Route path="/design/SeattleTransit" component={SeattleTransit} />
        <Route path="/design/BaseCamp" component={BaseCamp} />
        <Route path="/design/WestSoundWildlifeShelter" component={WSWS} />
        <Route path="/design/PortfolioRedesign" component={Portfolio} />
        <Route path="/projects/JointPressureSleeve" component={JPS} />
        {/*<Route path="/design/:projects" component={Design}></Route>*/}
        {/*<Route path="/code/:projects" component={<Code />}></Route>*/}
        <Route path="*" component={Error}/>
    </Switch>
}