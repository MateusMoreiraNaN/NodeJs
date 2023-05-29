import { Model, DataTypes } from "sequelize";
import { sequelize } from "../mysql/mysql";

export interface caixaInstance extends Model{
    id: number
    nameDoTitular: string
    numero: string
    CVV: number
    dataDeValidade: string

}

export const Caixa = sequelize.define<caixaInstance>('Caixa',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false

    },
    nameDoTitular:{
        type: DataTypes.STRING,
        allowNull: false
    },
    numero:{
        type: DataTypes.STRING,
        allowNull: false
    },
    CVV:{
        type: DataTypes.NUMBER,
        allowNull: false
    },
    dataDeValidade:{
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    tableName: 'cartoes',
    timestamps: false

})

