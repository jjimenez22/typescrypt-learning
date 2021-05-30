// import {Card} from "../model/card";
//
// class CardController {
//     lifeCheck() {
//         return {
//             text: `Hello, I'm ${this.constructor.name}, and I exist`
//         }
//     }
//
//     list(userId: string) {
//         return Card.findByUserId(userId)
//     }
//
//     get(userId: string, id: string) {
//         return Card.findByIdAndUserId(id, userId)
//     }
//
//     post(userId: string, body: typeof Card) {
//         const card = Card.build(body);
//         card.userId = userId
//         return card.save()
//     }
// }
//
// export = new CardController() // singleton
