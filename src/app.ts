import dotenv from 'dotenv';
import express, {Request, Response, NextFunction} from 'express';
import mongoose from 'mongoose'
import {json} from 'body-parser'
import MainRouter from './routers/main.router'
import ErrorHandler from './model/errorHandler';

// load the environment variables from the .env file
dotenv.config({
    path: '.env'
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
    public app = express();
    public router = MainRouter;
}

// initialize server app
const server = new Server();

//json mapper middleware
server.app.use(json())

// make server app handle any route starting with '/api'
server.app.use('/api', server.router);

// make server app handle any error
server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({
        status: 'error',
        statusCode: err.statusCode,
        message: err.message
    });
});

// connect to mongodb
const uri = process.env.MONGODB_URL || 'mongodb://localhost:27017/creditcard';
console.log('connecting to mongodb:', uri)
mongoose.connect(
    uri,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Connected to database')
}).catch(reason => console.error('failed connecting to database:', reason))

// make server listen on some port
const port = process.env.APP_PORT || 5000;
server.app.listen(port, () => console.log(`> Listening on port ${port}`));
