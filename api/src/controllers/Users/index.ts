import { log } from 'console';
import { getAllUser } from '../../services/user';

export const allUsers = async () => {
  try {
    const response = await getAllUser();
  } catch (error) {
    log(error)
  }
};
