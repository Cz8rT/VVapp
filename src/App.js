import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Home from './layouts/Home';
import Search from "./layouts/Search/search";


// ROUTER
function App() {
    return (
        <Router>
            <Container>
                <Navigation/>
                <Search/>
            </Container>
        </Router>
    )
}

export default App;
