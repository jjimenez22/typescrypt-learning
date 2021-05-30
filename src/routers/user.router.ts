import {Request, Response, Router} from 'express'
import userController from '../controllers/user.controller'
import {Todo} from "../model/todo"
import ErrorHandler from "../model/errorHandler";

const router = Router()

router.get('/lifeCheck', (req: Request, res: Response) => {
    res.status(200).json(userController.lifeCheck())
})

router.get('/', async (req: Request, res: Response) => {
    userController.list()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(reason => {
            console.error(reason)
            throw new ErrorHandler(500, reason)
        })
})

router.get('/:id', (req: Request, res: Response) => {
    userController.get(req.params.id)
        .then(user => {
            res.status(200).json(user)
        })
})

router.post('/', (req: Request, res: Response) => {
    userController.post(req.body)
        .then(postedUser => {
            res.status(201).json(postedUser)
        })
})

router.get('/:userId/cards', (req: Request, res: Response) => {
    userController.cards(req.params.userId)
        .then(cards => {
            res.status(200).json(cards)
        })
})

router.post('/:userId/cards', (req: Request, res: Response) => {
    userController.postCard(req.params.userId, req.body)
        .then(postedCard => {
            res.status(201).json(postedCard)
        })
})

router.delete('/:userId/cards/:cardId', async (req: Request, res: Response) => {
    if (await userController.removeCard(req.params.userId, req.params.cardId)) {
        res.status(200).send("deleted")
    } else {
        res.status(404).send("not found")
    }
})

export default router
