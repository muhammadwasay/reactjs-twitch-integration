export const GET_TOP_GAMES = 'GET_TOP_GAMES'
export const GET_STREAMS = 'GET_STREAMS'

export const getTopGames = (data) => {
    return ({
        type: GET_TOP_GAMES,
        payload: data
    })
}

export const getStreams = (data) => {
    return ({
        type: GET_STREAMS,
        payload: data
    })
}