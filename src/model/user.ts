import {getModelForClass, modelOptions, prop} from "@typegoose/typegoose";

@modelOptions({schemaOptions: {collection: 'users'}})
class UserClass {
    @prop()
    fullName!: string

    @prop()
    email!: string

    @prop()
    username!: string

    @prop()
    password!: string

    static build = (attr: UserClass) => {
        return new User(attr)
    }
}

const User = getModelForClass(UserClass)

export {User}
