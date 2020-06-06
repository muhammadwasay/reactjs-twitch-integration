import React from "react";
import {connect} from "react-redux";
import {getStreams} from "../app/actions";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";
import axios from "axios";

class GetStreams extends React.Component {
    constructor(props) {
        super(props);
        this.gameId = props.game.gameId;
        this.gameName = props.game.gameName;
    }

    handleGetStreams = () => {
        let that = this;
        axios.get('http://localhost:8080/streams?game_id='+this.gameId)
            .then(function (response) {
                console.log(response.data);
                that.props.getStreams(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    render() {
        return (
            <div>
                <Button variant="primary"
                        onClick={this.handleGetStreams}>
                    Get Streams - {this.gameName}
                </Button>
            </div>
        );
    }
}

export default withRouter(connect(null, {getStreams})(GetStreams));