import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/pg";

export interface TvInstance extends Model{
    id: number
    name: string
    note: number
}

export const Tv = sequelize.define<TvInstance>('Tv',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    note:{
        type: DataTypes.DOUBLE

    }
},{
    tableName: 'tv',
    timestamps: false
})