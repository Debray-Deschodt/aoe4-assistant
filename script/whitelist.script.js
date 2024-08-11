const mongoose = require('mongoose')
const env = require('../environment/development.js')
const Whitelist = require('../database/models/whitelist.model.js')
const axios = require('axios')

/**
 * Save a new whitelist user
 * @process.env.NAME {string} name
 */
createUser = async (name) => {
    try {
        const res = await axios.get(
            'https://aoe4world.com/api/v0/players/search?query=' +
                name +
                '&exact=true'
        )
        let user = new Whitelist({
            userId: res.data.players[0].profile_id,
            name: name
        })
        user = await user.save()
        return user
    } catch (e) {
        throw e
        process.exit(0)
    }
}

mongoose
    .connect(env.dbUrl)
    .then(() => {
        console.log('db connected successfully')
        createUser(process.env.NAME)
            .then(() => {
                console.log(
                    process.env.NAME + ' has been register as a whitelist user.'
                )
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(async () => {
                await mongoose.connection.close()
                console.log('MongoDB connection closed')
                process.exit(0)
            })
    })
    .catch((e) => console.error(e))
