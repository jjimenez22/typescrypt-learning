
import { Router } from 'express';
// import CardRouter from './card.router';
import UserRouter from './user.router';

class MainRouter {
    private _router = Router();
    // private _cards = CardRouter;
    private _users = UserRouter;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routes to their matching routers.
     */
    private _configure() {
        this._router.use('/users', this._users);
        // this._router.use('/cards', this._cards);
    }
}

export = new MainRouter().router;
