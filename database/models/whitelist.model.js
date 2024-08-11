const mongoose = require('mongoose')
const schema = mongoose.Schema

const whitelistSchema = schema(
    {
        userId: { type: Number, required: true },
        name: { type: String, required: true }
    },
    { timestamps: true }
)

const Whitelist = mongoose.model('AoeWhitelist', whitelistSchema)

module.exports = Whitelist
