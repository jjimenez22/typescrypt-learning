import {getModelForClass, modelOptions, prop} from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: 'todos'} } )
class TodoClass {
    @prop()
    title!: string

    @prop()
    description!: string

    static build = (attr: TodoClass) => {
        return new Todo(attr)
    }
}

const Todo = getModelForClass(TodoClass)

export { Todo }
