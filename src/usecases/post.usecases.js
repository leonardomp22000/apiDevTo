const Post = require("../models/post.model")
const createError = require("http-errors")

async function create(postData) {
    const postCreated = await Post.create(postData)
    return postCreated
}

async function getAll() {
    const allPost = await Post.find().populate("user")
    return allPost
}

async function deleted(id) {
    const postDeleted= await Post.findByIdAndDelete(id)
    return postDeleted
}

async function update(id, postData) {
    const isUserOnBody = postData.user
    if(isUserOnBody){
        throw createError(400, "No se puede cambiar el usuario") // PREGUNTA
        
    }
    const postUpdated = await Post.findByIdAndUpdate(id, postData, { new:true })
    return postUpdated
    
}
module.exports = {
    create, 
    getAll, 
    deleted, 
    update
}

