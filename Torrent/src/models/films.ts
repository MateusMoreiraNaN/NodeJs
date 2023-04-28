import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface FilmsInstance extends Model{
    id: number,
    name: string
}

export const Category = sequelize.define<FilmsInstance>("films",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull: false
    },
    name:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'films',
    timestamps: false
})