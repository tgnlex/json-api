import express from 'express';
import session from 'express-session';
import passport from 'passport';
const PORT = 3000;

const app = express();
app.set('view engine', ejs);

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static('./static/'));

app.get('/', (req, res, next) => {
  res.render('index.ejs', {title: "Landing"});
})

app.get('/login', (req, res, next) => {
  res.render('login.ejs', {title: "Login"});
})
app.get('/register', (req, res, next) => {
  res.render('register.ejs', {title: "Register"})
})
app.get('/profile', (req, res, next) => {
  res.render('profile.ejs')
})