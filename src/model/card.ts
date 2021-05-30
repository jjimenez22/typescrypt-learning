import {getModelForClass, modelOptions, pre, prop} from "@typegoose/typegoose";

@pre<CardClass>('save', async function () {
    const cards: CardClass[] = await Card.find({userId: this.userId})
    this.primary = !cards?.length // if it's the first one, mark as primary
})
@modelOptions({schemaOptions: {collection: 'cards'}})
class CardClass {
    @prop()
    userId!: string

    @prop()
    token!: string

    @prop()
    brandType!: string

    @prop()
    maskedNumber!: string

    @prop({default: false})
    primary!: boolean

    static build = (attr: CardClass) => {
        return new Card(attr)
    }

    static findByUserId = (userId: string) => {
        return Card.find({userId}).exec()
    }

    static findByIdAndUserId = (id: string, userId: string): Promise<typeof Card> => {
        return Card.findOne({_id: id, userId}).exec()
    }
}

const Card = getModelForClass(CardClass)

export {Card}
