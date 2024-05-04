import express from 'express';
import {viewHandler} from '../_shared/handlers/viewHandler.js';
import session from 'express-session';
import passport from 'passport';
const clients = [];

const app = express();
app.set('view engine', ejs);

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static('./static/'));

app.get('/', viewHandler('index.ejs', {title: "Index"}));
app.get('/login', viewHandler('login.ejs', {title: "Login"}));
app.get('/register', viewHandler('register.ejs', {title: "Register"}))
app.get('/profile', viewHandler('profile.ejs', {title: "Profile", user: User}))
app.get('/profile/avatar/', viewHandler('upload_avatar.ejs', {title: "Register"}))

export {app};