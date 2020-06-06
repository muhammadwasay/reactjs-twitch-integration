import React from "react";
import {connect} from "react-redux";
import {getTopGames} from "../app/actions";
import Button from "react-bootstrap/Button";
import {withRouter} from "react-router-dom";
import axios from 'axios'

class GetTopGamesButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleGetTopGames = () => {
        let that = this;
        axios.get('http://localhost:8080/games/top')
            .then(function (response) {
                console.log(response.data);
                that.props.getTopGames(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
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