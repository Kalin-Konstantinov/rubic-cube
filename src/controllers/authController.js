const router = require('express').Router();

const login = (req, res) => {
    res.render('auth/login', { title: 'Login' });
}

const register = (req, res) => {
    res.render('auth/register', { title: 'Register' });
}

router.get('/login', login);
router.get('/register', register);

module.exports = router;
