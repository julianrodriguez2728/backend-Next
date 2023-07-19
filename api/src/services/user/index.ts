import { User } from "../../lib/database/models/User";
import {Product} from "../../lib/database/models/Product";
import { UserAttributes } from "../../lib/database/models/User";


export const getAllUser = async () => {
  try{
    const response = await User.findAll({include:[Product]})
    return response;
    
  }catch(error){
    console.log(error)
  }
};
export const create = async (user: UserAttributes) => {
    try {
      const userCreate = await User.create(user)
      return userCreate;
    } catch (error) {
      console.log(error);
      
    }
};
