import { Schema, model, Model, connection, ObjectId } from "mongoose";
type UserType = {
    //_id:  ObjectId
    email: string,
    password: string
    
};

const schema = new Schema<UserType>({
    //_id: Object,
    email: String,
    password: String
  });

const modelName: string = 'User';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<UserType>
     :
    model<UserType>(modelName, schema);