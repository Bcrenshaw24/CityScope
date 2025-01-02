const express = require('express') 
const router = express.Router() 
const {weather, air, water, crime} = require('./apiControllers/apiController')

router.route('/weather').get(weather)
router.route('/air').get(air)
router.route('/water').get(water)
router.route('/crime').get(crime)


module.exports = router
