import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URI);

import indexRouter from './routes/index.js';
// import usersRouter from './routes/users.js';

app.listen(3001);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(new URL('.', import.meta.url).pathname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

export default app;
