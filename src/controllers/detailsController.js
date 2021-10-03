const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    res.render('details');
});


module.exports = router;
