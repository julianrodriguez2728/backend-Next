//! service de users

import { log } from "console";
import { ProductHistory } from "../../lib/database/models/ProductHistory";
import { User } from "../../lib/database/models/User";

export const getAllUser = async () => {
    const users = await User.findAll({
        include: {
            model: ProductHistory,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    log(users)
    return users
};

export const getOneUser = async (id: number) => {
    const user = await User.findByPk(id, {
        include: [{
            model: ProductHistory,
            attributes: ['id', 'name'],
            through: {attributes: [] }
        }]
    })
    log(user)
    return user
}
