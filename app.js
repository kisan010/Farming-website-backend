var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require('cors');
const Cartrouter = require('./routes/cart.Router');
const productRouter = require('./routes/product.Router');
const loginRouter = require('./routes/loginRouter');
const signUprouter = require('./routes/signUpRouter');
const userRouter=require('./routes/userRouter');

var app = express();
const allowedOrigins = [
    "http://localhost:5173",
    "https://farming-website-three.vercel.app" 
];

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors({origin:allowedOrigins, credentials: true}))
app.use(cookieParser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/cart', Cartrouter);

app.use('/product',productRouter)
app.use('/signup',signUprouter)
app.use('/login',loginRouter)



app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
