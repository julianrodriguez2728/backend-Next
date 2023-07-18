import { User } from "../../lib/database/models/User";
//! service de users

import { UserAttributes } from "../../lib/database/models/User";
import { log } from "console";
import { ProductHistory } from "../../lib/database/models/ProductHistory";

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
 
export const create = async (user: UserAttributes) => {
    try {
      const userCreate = await User.create(user)
      return userCreate    
    } catch (error) {
      console.log(error);
      
    }
};
