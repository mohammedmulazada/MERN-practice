const express = require('express')
const router = express.Router()

// the path after the initial
// @route	GET api/posts/test
// @desc 	Tests post route
// @access	Public
router.get('/test', (req, res) => {
	res.json({
		msg: 'Posts works'
	})
})

module.exports = router
