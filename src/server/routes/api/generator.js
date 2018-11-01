const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//LOAD
//Container Model
const Container = require('../../models/Container')

// @route GET api/profile/test
// @desc Tests profile route
// @access Public
router.get('/test', (req, res) => res.json({ msg: "Generator works" }))


module.exports = router
