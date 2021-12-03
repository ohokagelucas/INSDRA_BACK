const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    picture: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId
        
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
   
    comentarioId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'  

    }],

    comentario: [{
        type: String   

    }]
})

module.exports = mongoose.model('Post', Schema)