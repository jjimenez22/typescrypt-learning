// import {NextFunction, Request, Response, Router} from 'express';
// import CardController from '../controllers/card.controller';
// import UserRouter from './user.router'
//
// // interface Request {
// //     extraParams?: any
// // }
//
// class CardRouter {
//     private _router = Router();
//     private _controller = CardController;
//
//     get router() {
//         return this._router;
//     }
//
//     constructor() {
//         this._configure();
//     }
//
//     /**
//      * Connect routes to their matching controller endpoints.
//      */
//     private _configure() {
//         // register under /users/:userId/cards
//         UserRouter.use('/:userId/cards', (req: Request, res: Response, next: NextFunction) =>{
//             // send user id to next middlewares
//             req.extraParams = { ...req.extraParams, userId: this.getUserId(req)}
//             next()
//         }, this._router)
//
//         this._router.get('/lifeCheck', (req: Request, res: Response, next: NextFunction) => {
//             res.status(200).json(this._controller.lifeCheck());
//         });
//
//         this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
//             const userId = this.getUserId(req);
//             res.status(200).json(await this._controller.list(userId));
//         });
//
//         this._router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
//             const userId = this.getUserId(req);
//             res.status(200).json(await this._controller.get(userId, req.params.id));
//         });
//
//         this._router.post('/', async (req: Request, res: Response, next: NextFunction) => {
//             const userId = this.getUserId(req);
//             res.status(201).json(await this._controller.post(userId, req.body));
//         });
//
//     }
//
//     private getUserId(req: Request) {
//         return String(req.params.userId || req.query.userId || req.extraParams?.userId);
//     }
// }
//
// export = new CardRouter().router;
