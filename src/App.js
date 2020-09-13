import React from 'react';
import './App.css';
import "./components/Header"
import Header from "./components/Header";
import Code from "./pages/Code"
import About from "./pages/About"
import Design from "./pages/Design"
import Project1 from "./projects/Project1";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


function App() {
    return <Router>
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={Design} />
                <Route exact path="/design">
                       <Redirect to ="/"/>
                </Route>
                <Route path="/about" component={About} />
                <Route path="/code" exact component={Code} />
                <Route path="/code/project1" component={Project1} />
                {/*<Route path="/design/:projects" component={Design}></Route>*/}
                {/*<Route path="/code/:projects" component={<Code />}></Route>*/}
                <Route path="*">404 Not Found</Route>
            </Switch>
        </div>
    </Router>
}

export default App;
