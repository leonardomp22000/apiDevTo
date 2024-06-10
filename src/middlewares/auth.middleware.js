const createError = require('http-errors')
const jwt = require('../lib/jwt')
const userUsecase = require('../usecases/users.usecase')


async function auth(request, response, next) {
    try {
        const token = request.headers.authorization
        if(!token){
            throw createError(401, 'JWT is required')
        }

        const payload = jwt.verify(token)
        const user = await userUsecase.getById(payload.id)

        request.user = user
        console.log(user)
        next()
    } catch (error) {
        response.status(401)
        response.json({
            success:false,
            error: error.message
        })
        
    }
}

module.exports = auth