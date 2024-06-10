const User = require('../models/users.model')
const createError= require('http-errors')
const encrypt = require('../lib/encrypt')

async function create(userData) {
    const existUser = await User.findOne({
        email: userData.email
    })
    if(existUser){
        throw createError(409, "email already in use")
    }
    const password = await encrypt.encrypt(userData.password)
    userData.password = password

    const newUser = await User.create(userData)
    return  newUser
}

async function getById(id) {
    const userFound =  await User.findById(id)
    return userFound
}

module.exports = { create, getById}
