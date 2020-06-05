import {combineReducers} from 'redux'
import {
    GET_TOP_GAMES,
    GET_STREAMS
} from './actions'

function topGames(state = [], action) {
    switch (action.type) {
        case GET_TOP_GAMES:
            return action.payload.data
        default:
            return state
    }
}

function topStreams(state = [], action) {
    switch (action.type) {
        case GET_STREAMS:
            return action.payload.data
        default:
            return state
    }
}

const APIReducer = combineReducers({
    topGames: topGames,
    topStreams: topStreams
})

export default APIReducer