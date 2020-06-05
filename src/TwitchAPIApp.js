import React from 'react';
import './TwitchAPIApp.css';
import {Route, Switch, Redirect} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./components/AboutPage";
import TopGamesPage from "./components/TopGamesPage";
import LolPage from "./components/LolPage";
import LorPage from "./components/LorPage";

export default function TwitchAPIApp() {
    return (
        <div>
            <NavigationBar/>
            <Switch>
                <Route exact path="/"><Redirect to="/about"/></Route>
                <Route path="/about" component={AboutPage}/>
                <Route path="/top-games" component={TopGamesPage}/>
                <Route path="/lol" component={LolPage}/>
                <Route path="/lor" component={LorPage}/>
            </Switch>
        </div>
    );
}
