import React from 'react';
import './App.css';
import "./components/Header"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox"
import Header from "./components/Header";
import Footer from "./components/Footer"
import Code from "./pages/Code"
import About from "./pages/About"
import Design from "./pages/Design"
import SeattleTransit from "./projects/SeattleTransit";
import BaseCamp from "./projects/BaseCamp"
import WSWS from "./projects/WSWS"


function App() {
    return <div className="App">
        <SimpleReactLightbox>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Design} />
                    <Route path="/design" exact>
                           <Redirect to ="/"/>
                    </Route>
                    <Route path="/about" component={About} />
                    <Route path="/code" exact component={Code} />
                    <Route path="/design/SeattleTransit" component={SeattleTransit} />
                    <Route path="/design/BaseCamp" component={BaseCamp} />
                    <Route path="/design/WestSoundWildlifeShelter" component={WSWS}/>
                    {/*<Route path="/design/:projects" component={Design}></Route>*/}
                    {/*<Route path="/code/:projects" component={<Code />}></Route>*/}
                    <Route path="*">404 Not Found</Route>
                </Switch>
                <Footer />
            </Router>
        </SimpleReactLightbox>
    </div>
}

export default App;
