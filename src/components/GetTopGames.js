import React from "react";
import {connect} from "react-redux";
import {getTopGames} from "../app/actions";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";

class GetTopGamesButton extends React.Component {

    handleGetTopGames = () => {
        this.props.getTopGames();
    };

    render() {
        return (
            <div>
                <Button variant="primary"
                        onClick={this.handleGetTopGames}>
                    Get Top Games
                </Button>
            </div>
        );
    }
}

export default withRouter(connect(null, {getTopGames})(GetTopGamesButton));