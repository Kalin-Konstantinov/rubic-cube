const router = require('express').Router();

const loginPage = (req, res) => {
    res.render('auth/login', { title: 'Login' });
}

const registerPage = (req, res) => {
    res.render('auth/register', { title: 'Register' });
}

router.get('/login', loginPage);
router.get('/register', registerPage);

module.exports = router;
