import { Schema, model, Model, connection } from 'mongoose'

type UserType = {
    email: string
    password: string
}

const schema = new Schema<UserType>({
    email: {type: String, requiredPaths: true},
    password: {type: String, required: true}
})

const modelName: string = 'User';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<UserType>
     :
    model<UserType>(modelName, schema);