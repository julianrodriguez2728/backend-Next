import { User } from "../../lib/database/models/User";
import {Product} from "../../lib/database/models/Product";
import { UserAttributes } from "../../lib/database/models/User";
import { log } from "console";

export const getAllUser = async () => {
    const users = await User.findAll({
        include: {
            model: Product,
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
            model: Product,
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
      return userCreate;
    } catch (error) {
      console.log(error);
      
    }
};
