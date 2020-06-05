This demo application is a front-end client which query back-end microservice REST API and display the JSON received.
The back-end microservice integrates with Twitch New API and fetch the data and expose it through its own REST API interface.

The following API calls are available.
* Get Top Games [api reference](https://dev.twitch.tv/docs/api/reference#get-top-games)
* Get Streams [api reference](https://dev.twitch.tv/docs/api/reference#get-streams)

Following design and technologies have been used.
Category | Details
------------ | -------------
Architecture | [Single page web application](https://en.wikipedia.org/wiki/Single-page_application) 
UI JavaScript library | [React](https://reactjs.org/)
Twitch | [Twitch New API](https://dev.twitch.tv/docs/api)
State management library | Hooks, [React Redux](https://react-redux.js.org/)
Styling and CSS | [React Bootstrap](https://react-bootstrap.netlify.app/)
Router library | [React Router](https://reacttraining.com/react-router/)
AJAX library | [Axios](https://github.com/axios/axios)
Tool chain | [Create react app](https://create-react-app.dev/),[npm](https://www.npmjs.com/),[webpack](https://webpack.js.org/)
Deployment | [AWS S3 static website hosting]()
