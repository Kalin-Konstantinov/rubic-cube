const router = require('express').Router();

const login = (req, res) => {
    res.render('auth/login', { title: 'Login' });
}

router.get('/login', login)
module.exports = router;
