import {User} from "../model/user";
import {Card} from "../model/card";

class UserController {
    lifeCheck() {
        return `${this.constructor.name}: OK`
    }

    list(): Promise<typeof User[]> {
        return User.find().exec()
    }

    get(id: string): Promise<typeof User> {
        return User.findById(id).exec()
    }

    post(body: object): Promise<typeof User> {
        return User.build(body).save()
    }

    cards(userId: string): Promise<typeof Card[]> {
        return Card.findByUserId(userId)
    }

    postCard(userId: string, body: typeof Card): Promise<typeof Card> {
        const card = Card.build(body);
        card.userId = userId
        return card.save()
    }

    async removeCard(userId: string, cardId: string): Promise<boolean> {
        const card: typeof Card = await Card.findByIdAndUserId(cardId, userId)
        if (card) {
            await card.remove()
            return true
        }
        return false
    }
}

export = new UserController() // singleton
