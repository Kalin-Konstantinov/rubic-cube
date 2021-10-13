const userController = require('../services/authService');

const router = require('express').Router();

const loginPage = (req, res) => {
    res.render('auth/login', { title: 'Login' });
}

const registerPage = (req, res) => {
    res.render('auth/register', { title: 'Register' });
}

const login = (req, res) => {
    console.log(req.body);
}

const register = (req, res) => {
    const { username, password } = req.body;
    userController.createUser(username, password)
    res.redirect('/user/login')

}

router.get('/login', loginPage);
router.get('/register', registerPage);
router.post('/login', login);
router.post('/register', register);

module.exports = router;
