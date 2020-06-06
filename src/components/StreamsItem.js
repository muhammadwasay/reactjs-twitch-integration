import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import template from "url-template";

const StreamsItem = ({streamData}) => {
    let url = template.parse(streamData.thumbnail_url);
    let expandedUrl = url.expand({width: 500 , height : 300})
    return (
        <>
            <Container>
            <small>User Id : {streamData.user_id}</small>
            <h5>{streamData.title}</h5>
                <h6>User Name: {streamData.user_name}</h6>
                <h6>Viewer Count: <b>{streamData.viewer_count}</b></h6>
            <Image src={expandedUrl}/>
            </Container>
        </>
    )
};

export default withRouter(connect()(StreamsItem));
