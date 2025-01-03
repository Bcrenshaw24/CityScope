const express = require('express') 
const router = express.Router() 
const {all} = require('./Controllers/apiController')

router.route('/').get(all)



module.exports = router
