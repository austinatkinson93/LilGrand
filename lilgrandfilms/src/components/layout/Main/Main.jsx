import React, {useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../../routes/About/About";
import Visuals from "../../routes/Visuals/Visuals";
import Home from "../../routes/Home/Home";
import axios from 'axios';
import Contact from "../../routes/Contact/Contact";


const Main = () => {



    return (
<main>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/visuals" component={Visuals} />
        <Route path="/contact" component={Contact} />
        <Route path="*" render={() => <Redirect to="/home" />} />
    </Switch>
</main>
    )
}

export default Main;