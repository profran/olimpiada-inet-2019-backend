const express = require('express')
const router = express.Router()
const windDataController = require('../app/controllers/windData')

router.post('/', windDataController.create)
router.get('/', windDataController.getAll)

module.exports = router
