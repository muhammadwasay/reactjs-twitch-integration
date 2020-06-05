export const GET_TOP_GAMES = 'GET_TOP_GAMES'
export const GET_STREAMS = 'GET_STREAMS'

export const getTopGames = () => {
    /*TODO call AjAX*/
    return ({
        type: GET_TOP_GAMES,
        payload: {
            "data": [
                {
                    "id": "497497",
                    "name": "Brawl Stars",
                    "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/Brawl%20Stars-{width}x{height}.jpg"
                },
                {
                    "id": "506415",
                    "name": "Sekiro: Shadows Die Twice",
                    "box_art_url": "https://static-cdn.jtvnw.net/ttv-boxart/./Sekiro:%20Shadows%20Die%20Twice-{width}x{height}.jpg"
                },
            ],
            "pagination": {
                "cursor": "eyJzIjo4MSwiZCI6ZmFsc2UsInQiOnRydWV9"
            }
        }
    })
}

export const getStreams = (gameId) => {
    /*TODO call AjAX*/
    return ({
        type: GET_STREAMS,
        payload: {
            "data": [
                {
                    "id": "1849813089",
                    "user_id": "50795214",
                    "user_name": "Sardoche",
                    "game_id": "21779",
                    "type": "live",
                    "title": "SARDOCHE - La fosse cèdera contre notre mental - (DS3 dans la soirée)",
                    "viewer_count": 30961,
                    "started_at": "2020-06-05T07:21:23Z",
                    "language": "fr",
                    "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_sardoche-{width}x{height}.jpg",
                    "tag_ids": [
                        "6f655045-9989-4ef7-8f85-1edcec42d648"
                    ]
                },
                {
                    "id": "38492091232",
                    "user_id": "26779624",
                    "user_name": "relaxing234",
                    "game_id": "21779",
                    "type": "live",
                    "title": "【 Stanley 】6/05  越戳越強型上路   今天來點不一樣的",
                    "viewer_count": 12152,
                    "started_at": "2020-06-05T12:06:37Z",
                    "language": "zh",
                    "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_relaxing234-{width}x{height}.jpg",
                    "tag_ids": [
                        "74c92063-a389-4fd2-8460-b1bb82b04ec7"
                    ]
                }
            ],
            "pagination": {
                "cursor": "eyJiIjp7IkN1cnNvciI6ImV5SnpJam96TURrMk1TNHlOVEk1T0RNeE16azBNaXdpWkNJNlptRnNjMlVzSW5RaU9uUnlkV1Y5In0sImEiOnsiQ3Vyc29yIjoiZXlKeklqb3lNRGt4TGpFME56TXdOalF3TlRnd015d2laQ0k2Wm1Gc2MyVXNJblFpT25SeWRXVjkifX0"
            }
        }
    })
}