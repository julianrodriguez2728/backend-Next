import { log } from 'console';
import { getAllUser, getOneUser } from '../../services/user';

export const allUsers = async () => {
  try {
    const response = await getAllUser();
    return response
  } catch (error) {
    log(error)
  }
};

export const oneUser = async (id: number) => {
  try {
      const response = await getOneUser(id)
      return response
  } catch (error) {
    
  }
}