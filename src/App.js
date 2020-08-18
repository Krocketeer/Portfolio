import React from 'react';
import './App.css';
import "./components/Header"
import Header from "./components/Header";
import Code from "./pages/Code"
import About from "./pages/About"
import Design from "./pages/Design"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return <Router>
        <div className="App">
            <Header />
            <Switch>
                <Router path="/" exact component={Design} />
                <Route path="/about" component={About} />
                <Route path="/code" component={Code} />
            </Switch>
        </div>
    </Router>
}

export default App;
