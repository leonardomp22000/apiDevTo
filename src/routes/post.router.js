const express = require("express")
const postUsecases = require("../usecases/post.usecases")
const router = express.Router()
const auth = require("../middlewares/auth.middleware")
const createError = require("http-errors")

router.post('/', auth, async (request, response) =>{
    try {
        const postCreated = await postUsecases.create(request.body)
        response.json({
            success:true,
            data:{
                postCreated
            }
        })
        
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false, 

        })
        
    }
})

router.get('/', async(request, response) => {
    try {
        const allPost = await postUsecases.getAll()
        response.json({
            suceess:true, 
            data:{
                allPost
            }
        })
        
    } catch (error) {
        response.status(error.status || 500), 
        response.json({
            sucess: false
        })
        
    }
})

router.delete('/:id', auth, async(request, response) => {
    try {
        const { id } = request.params
        const postDeleted = await postUsecases.deleted(id)
        response.json({
            success:true,
            data: {
                postDeleted: postDeleted
            }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success:false,
            
        })
    }
})

router.patch('/:id', auth, async(request, response) =>{
    try {

        const { id } = request.params
        const postUpdated = await postUsecases.update(id, request.body)
        response.json({
            success:true, 
            data: {
                postUpdated: postUpdated
            }
        })  
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success:false
        })
        
    }
})

module.exports = router 