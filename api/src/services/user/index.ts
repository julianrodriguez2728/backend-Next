import { User } from "../../lib/database/models/User";
import { UserAttributes } from "../../lib/database/models/User";
//! service de users

export const getAllUser = async () => {
  
};
export const create = async (user: UserAttributes) => {
    try {
      const userCreate = await User.create(user)
      return userCreate    
    } catch (error) {
      console.log(error);
      
    }
};
