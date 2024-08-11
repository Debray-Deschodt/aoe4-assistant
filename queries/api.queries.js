const axios = require('axios')

/**
 *
 * @param {string} user
 * @returns the 10 last user'game
 */
exports.getLastGamesId = async (userId) => {
    const lastGames = await axios.get(
        'https://aoe4world.com/api/v0/players/' + userId + '/games?limit=10'
    )
    const lastGamesId = []
    for (let i = 0; i < 10; i++) {
        lastGamesId.push(lastGames.data.games[i].game_id)
    }
    return lastGamesId
}

/**
 *
 * @param {string} user
 * @param {number} userId
 * @param {number} gameId
 * @returns
 */
exports.getGamebyId = async (user, userId, gameId) => {
    let _user = user.replace('.', '-')
    const res = await axios.get(
        'http://localhost:3000/proxy/aoe4world.com/players/' +
            userId +
            '-' +
            _user +
            '/games/' +
            gameId +
            '/summary?camelize=true'
    )
    return res.data
}
