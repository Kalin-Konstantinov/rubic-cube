const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    res.render('details', { title: 'Details' });
});


module.exports = router;
