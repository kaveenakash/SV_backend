const express = require('express')
const router = express.Router()

const {googlelogin} = require('../controllers/controller')

router.post("/googlelogin",googlelogin)


module.exports = router