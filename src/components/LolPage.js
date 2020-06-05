import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import StreamsPage from "./StreamsPage";

const game = {gameId: 21779, gameName: "League of Legends", gameImage: "League of Legends.jpg"};
const LolPage = () => (
    <>
        <StreamsPage game={game}/>
    </>
);


export default withRouter(connect()(LolPage));
