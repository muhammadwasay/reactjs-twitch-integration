import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import template from "url-template";

const GameItem = ({gameData}) => {
    let url = template.parse(gameData.box_art_url);
    let expandedUrl = url.expand({width: 200 , height : 300})
    return (
        <>
            <Container>
            <small>Game ID : {gameData.id}</small>
            <h5>{gameData.name}</h5>
            <Image src={expandedUrl}/>
            </Container>
        </>
    )
};

export default withRouter(connect()(GameItem));
