import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import StreamsPage from "./StreamsPage";

const game = {gameId: 514790, gameName: "Legends of Runeterra", gameImage: "Legends of Runeterra.jpg"};
const LorPage = () => (
    <>
        <StreamsPage game={game}/>
    </>
);

export default withRouter(connect()(LorPage));
