import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'

const AboutPage = () => (
    <>
        <Container>
            <Row>
                <h2>About</h2>
            </Row>

            <article className="markdown-body entry-content container-lg" itemProp="text"><p>This demo application is a
                front-end client which query back-end microservice REST API and display the JSON received.
                The back-end microservice integrates with Twitch New API and fetch the data and expose it through its
                own REST API interface.</p>
                <p>The following API calls are available.</p>
                <ul>
                    <li>Get Top Games <a href="https://dev.twitch.tv/docs/api/reference#get-top-games" rel="nofollow">api
                        reference</a></li>
                    <li>Get Streams <a href="https://dev.twitch.tv/docs/api/reference#get-streams" rel="nofollow">api
                        reference</a></li>
                </ul>
                <p>Following design and technologies have been used.</p>
                <table>
                    <thead>
                    <tr>
                        <th>Category</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Architecture</td>
                        <td><a href="https://en.wikipedia.org/wiki/Single-page_application" rel="nofollow">Single page
                            web application</a></td>
                    </tr>
                    <tr>
                        <td>UI JavaScript library</td>
                        <td><a href="https://reactjs.org/" rel="nofollow">React</a></td>
                    </tr>
                    <tr>
                        <td>Twitch</td>
                        <td><a href="https://dev.twitch.tv/docs/api" rel="nofollow">Twitch New API</a></td>
                    </tr>
                    <tr>
                        <td>State management library</td>
                        <td>Hooks, <a href="https://react-redux.js.org/" rel="nofollow">React Redux</a></td>
                    </tr>
                    <tr>
                        <td>Styling and CSS</td>
                        <td><a href="https://react-bootstrap.netlify.app/" rel="nofollow">React Bootstrap</a></td>
                    </tr>
                    <tr>
                        <td>Router library</td>
                        <td><a href="https://reacttraining.com/react-router/" rel="nofollow">React Router</a></td>
                    </tr>
                    <tr>
                        <td>AJAX library</td>
                        <td><a href="https://github.com/axios/axios">Axios</a></td>
                    </tr>
                    <tr>
                        <td>Tool chain</td>
                        <td><a href="https://create-react-app.dev/" rel="nofollow">Create react app</a>,<a
                            href="https://www.npmjs.com/" rel="nofollow">npm</a>,<a href="https://webpack.js.org/"
                                                                                    rel="nofollow">webpack</a></td>
                    </tr>
                    <tr>
                        <td>Deployment</td>
                        <td><a href="/muhammadwasay/reactjs-twitch-integration/blob/master">AWS S3 static website
                            hosting</a></td>
                    </tr>
                    </tbody>
                </table>
            </article>

            <Row>
            </Row>
        </Container>
    </>
);

export default withRouter(connect()(AboutPage));
