const { Router }  = require('express')
const controllers = require('../controllers/index.js')
const router = Router()
// const restrict = require('../helpers')

router.get('/', (req, res) => res.send('This is root.'))

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.put('/change-password/:id', controllers.changePassword)
router.get('/users/:id', controllers.getUserById)
router.get('/items', controllers.getAllItems)
router.get('/items/:id', controllers.getItemById)
router.post('/items', controllers.createItem)
router.put('/items/:id', controllers.updateItem)
router.delete('/items/:id', restrict, controllers.deleteItem)
// router.get('/items/:id', controllers.getAllItemsByUserId)
router.delete('/items/:id', controllers.deleteItem)

module.exports = router

