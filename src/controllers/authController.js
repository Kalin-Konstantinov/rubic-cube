const { isNotAuth, isAuth } = require('../middlewares/authMiddlewares');
const authService = require('../services/authService');
const { USER_TOKEN_NAME } = require('../utility/constants');


const router = require('express').Router();


const loginPage = (req, res) => {
    res.render('auth/login', { title: 'Login' });
}

const registerPage = (req, res) => {
    res.render('auth/register', { title: 'Register' });

}

const login = async (req, res) => {
    try {
        let token = await authService.login(req.body);
        res.cookie(USER_TOKEN_NAME, token, { httpOnly: true });
        res.redirect('/')
    } catch (err) {
        res.render('404', { error: err.message});
    }
}

const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        await authService.createUser(username, password)
        res.redirect('/user/login')
    } catch (err) {
        res.render('404', { error: err.message})
    }

}

const logout = (req, res) => {
    res.clearCookie(USER_TOKEN_NAME);
    res.redirect('/');
}

router.get('/login', isNotAuth, loginPage);
router.get('/register', isNotAuth, registerPage);
router.post('/login', isNotAuth, login);
router.post('/register', isNotAuth, register);
router.get('/logout', logout);

module.exports = router;
