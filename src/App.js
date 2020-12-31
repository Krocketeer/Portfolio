import React from 'react';
import './App.css';
import "./components/Header"
import { BrowserRouter as Router } from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRouter from "./Routing"


function App() {
    return <div className="App">
        <SimpleReactLightbox>
            <Router>
                <Header />
                <AppRouter />
                <Footer />
            </Router>
        </SimpleReactLightbox>
    </div>
}

export default App;
