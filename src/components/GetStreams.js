import React from "react";
import {connect} from "react-redux";
import {getStreams} from "../app/actions";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";

class GetStreams extends React.Component {
    constructor(props) {
        super(props);
        this.gameId = props.game.gameId;
        this.gameName = props.game.gameName;
    }

    handleGetStreams = () => {
        this.props.getStreams(this.gameId);
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