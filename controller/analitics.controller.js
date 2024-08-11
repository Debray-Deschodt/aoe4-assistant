const { checkWhiteList, getUserId } = require('../queries/whitelist.queries.js')
const {
    getAnaliticsByUser,
    modifyAnalitics,
    createAnalitics
} = require('../queries/analitics.queries.js')
const { getLastGamesId, getGamebyId } = require('../queries/api.queries.js')

exports.checkWhitelist = async (req, res, next) => {
    try {
        if (await checkWhiteList(req.params.user)) {
            next()
        } else {
            res.status(301).end()
        }
    } catch (e) {
        res.status(401).end()
        throw e
    }
}

exports.checkUpToDate = async (req, res, next) => {
    const addLastGameId = (analitics, lastGameId) => {
        let _analitics = JSON.parse(JSON.stringify(analitics))
        for (let i = 0; i < 10; i++) {
            let i_games = analitics.civilisations[0].findIndex(
                (game) => game.gameId == lastGameId[i]
            )
            if (i_games == -1) {
                _analitics.civilisations[0][i] = {
                    gameId: lastGameId[i]
                }
            } else {
                _analitics.civilisations[0][i] = {
                    gameId: lastGameId[i],
                    apm: analitics.civilisations[0][i_games].apm,
                    kills: analitics.civilisations[0][i_games].kills,
                    death: analitics.civilisations[0][i_games].deaths,
                    relicsWin: analitics.civilisations[0][i_games].relicsWin,
                    relicsLost: analitics.civilisations[0][i_games].relicsLost
                }
            }
        }
        return _analitics
    }

    try {
        let analitics = await getAnaliticsByUser(req.params.user)
        const userId = await getUserId(req.params.user)
        const lastGamesId = await getLastGamesId(userId)
        if (!analitics) {
            analitics = await createAnalitics(req.params.user, userId)
        }
        analitics = addLastGameId(analitics, lastGamesId)
        await modifyAnalitics(req.params.user, analitics)
        next()
    } catch (e) {
        throw e
    }
}

exports.matchgameIdandStat = async (req, res, next) => {
    try {
        const analitics = await getAnaliticsByUser(req.params.user)
        for (let i = 0; i < 10; i++) {
            if (analitics.civilisations[0][i].apm == 0) {
                const gameId = analitics.civilisations[0][i].gameId
                const game = await getGamebyId(
                    req.params.user,
                    analitics.userId,
                    gameId
                )
                const i_players = game.players.findIndex(
                    (player) => player.name == req.params.user
                )
                analitics.civilisations[0][i].apm = game.players[i_players].apm
                analitics.civilisations[0][i].kills =
                    game.players[i_players]._stats.ekills
                analitics.civilisations[0][i].deaths =
                    game.players[i_players]._stats.edeaths
            }
        }
        await modifyAnalitics(req.params.user, analitics)
        const _analitics = await getAnaliticsByUser(req.params.user)
        //computing the average
        let averageAPM = 0
        let kills = 0
        let deaths = 0
        for (let i = 0; i < 10; i++) {
            averageAPM = averageAPM + _analitics.civilisations[0][i].apm
            kills = kills + _analitics.civilisations[0][i].kills
            deaths = deaths + _analitics.civilisations[0][i].deaths
        }
        averageAPM = parseInt(averageAPM / 10)
        let averageMilitary = parseInt((kills / deaths) * 100) / 100
        _analitics.apm = averageAPM
        _analitics.military = averageMilitary
        await modifyAnalitics(req.params.user, _analitics)
        next()
    } catch (e) {
        throw e
    }
}

exports.analiticsGet = async (req, res, next) => {
    try {
        const analitics = await getAnaliticsByUser(req.params.user)
        res.json(analitics)
    } catch (e) {
        throw e
    }
}
