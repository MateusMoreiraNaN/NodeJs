import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface CategoryInstance extends Model{
    id: number,
    name: string
}

export const Category = sequelize.define<CategoryInstance>("category",{
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
})