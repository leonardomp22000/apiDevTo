const mongoose = require('mongoose')
const schema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    }, 
    image:{
        type: String,
        required: true,
    }, 
    body: {
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    created_at: {
        type: Date, 
        default: Date.now()

    }
})

module.exports = mongoose.model('post', schema)