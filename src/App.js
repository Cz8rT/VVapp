import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';
import Container from "./components/Container";
import Navigation from "./components/Navigation";
import Search from "./layouts/Search/search";
import About from "./layouts/About/about";
import HowToUse from "./layouts/HowToUse/howToUse";
import Contact from "./layouts/Contact/contact";
import Footer from "./components/Footer/Footer";


// ROUTER
function App() {
    return (
        <Router>
                <Container>
                    <Navigation/>
                    <Switch>
                        <Route exact path='/' component={Search}/>
                        <Route path='/about' component={About}/>
                        <Route path='/howtouse' component={HowToUse}/>
                        <Route path='/contact' component={Contact}/>
                    </Switch>
                    <Footer/>
                </Container>
        </Router>
    )
}

export default App;
