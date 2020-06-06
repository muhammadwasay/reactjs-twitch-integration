import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import GetStreams from "./GetStreams";
import StreamsItem from "./StreamsItem";

let key = 1;
const StreamsPage = ({game, topStreams}) => (
    <>
        <Container>
            <br/>
            <Row>
                <h3>Top Streams - {game.gameName}</h3>
            </Row>
            <Row>
                <Card style={{width: '15rem'}}>
                    <Card.Img variant="top" src={game.gameImage}/>
                    <Card.Body>
                        <Card.Title>Get Streams - {game.gameName}</Card.Title>
                        <Card.Text>
                            Gets information about active streams. Streams are returned sorted by number of current
                            viewers, in descending order.
                        </Card.Text>
                        <GetStreams game={game}/>
                    </Card.Body>
                </Card>
                <br/>
                {topStreams.length === 0 ? <span></span> :
                    topStreams.map((streamData, index) => (
                        <StreamsItem key={key++} streamData={streamData}/>
                    ))}
            </Row>
        </Container>
    </>
);

const mapStateToProps = state => {
    const topStreams = state.store.topStreams;
    return {topStreams};
};
export default withRouter(connect(mapStateToProps)(StreamsPage));
