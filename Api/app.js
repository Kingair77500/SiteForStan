const createError = require("http-errors");
const express =  require("express");
const path = require("path");
const logger = require("morgan");
const helmet = require("helmet");

const fileRouter = require("./routes/stdFile");

const app = express();
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extented: false}));

app.use("/stlfile", fileRouter);

app.use((req, res, next) => {
   next(createError(404));
});

module.exports = app;