import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import GetTopGamesButton from "./GetTopGames";
import GameItem from "./GamesItem";

let key = 1;
const TopGamesPage = ({topGames}) => (
    <>
        <Container>
            <br/>
            <Row>
                <h3>Top Games</h3>
            </Row>
            <Row>
                <Card style={{width: '15rem'}}>
                    <Card.Img variant="top" src="/twitch-tv-logo.png"/>
                    <Card.Body>
                        <Card.Title>Get Top Games</Card.Title>
                        <Card.Text>
                            Gets games sorted by number of current viewers on Twitch, most popular first.
                        </Card.Text>
                        <GetTopGamesButton/>
                    </Card.Body>
                </Card>
                <br/>
                {topGames.length == 0 ? <span></span> :
                    topGames.map((gameData, index) => (
                        <GameItem key={key++} gameData={gameData}/>
                    ))}
            </Row>
        </Container>
    </>
);

const mapStateToProps = state => {
    const topGames = state.store.topGames;
    return {topGames};
};
export default withRouter(connect(mapStateToProps)(TopGamesPage));
