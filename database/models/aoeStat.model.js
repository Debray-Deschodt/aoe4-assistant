const mongoose = require('mongoose')
const schema = mongoose.Schema

const analiticsSchema = schema(
    {
        user: { type: String, required: true },
        userId: { type: Number, required: true },
        apm: { type: Number, default: 0 },
        military: { type: Number, default: 0 },
        relics: { type: Number, default: 0 },
        civilisations: [
            [
                {
                    gameId: { type: Number, required: true },
                    apm: { type: Number, default: 0 },
                    kills: { type: Number, default: 0 },
                    deaths: { type: Number, default: 0 },
                    relicsWin: { type: Number, default: 0 },
                    relicsLost: { type: Number, default: 0 }
                }
            ]
        ]
    },
    { timestamps: true }
)

const Analitics = mongoose.model('AoeAnalitics', analiticsSchema)

module.exports = Analitics
