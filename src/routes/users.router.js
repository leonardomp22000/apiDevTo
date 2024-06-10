const express = require('express')
const router = express.Router()
const usersUsecases = require('../usecases/users.usecase')

router.post('/', async (request, response) =>{
    try {
        const userCreated = await usersUsecases.create(request.body)
        response.json({
            success:true,
            data: {
                userCreated: userCreated
            }
        })
    } catch (error) {
        response.status(error.status || 500 )
        response.json({
            success:false,
            error: error.message 
        })
    }
})

router.get('/:id', async (request, response)=>{
    try {
        const { id } = request.params
        const userFound = await usersUsecases.getById(id)
        response.json({
            success: true, 
            data: {
                userFound: userFound
            }
        })
        
    } catch (error) {
        error.status(error.status || 500)
        json.response({
            success: false,
            error: error.message
        })
    }

})








module.exports = router