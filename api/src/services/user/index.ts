import { User } from '../../lib/database/models/User';
import { Product } from '../../lib/database/models/Product';
import { UserAttributes } from '../../lib/database/models/User';

export const getAllUser = async () => {
  try {
    const allUsers = await User.findAll({
      include: [Product],
    });

    return allUsers;
  } catch (error) {
    console.log('Something were wrong');
  }
};

export const getOneUser = async (id: number) => {
  try {
    const user = await User.findByPk(id, {
      include: [Product],
    });
    if (!user?.name) return 'This user does not exist';
    return user;
  } catch (error) {
    console.log('Something were wrong');
  }
};

export const create = async (user: UserAttributes) => {
  try {
    let count = 0;
    const allUsers = await User.findAll(); //* traemos todos los usuarios antes de crear
    const results = allUsers.find(
      //* buscamos si el usuario que se intenta crear ya existe
      (item) => user.name === item.name && user.email === item.email
    );
    if (results?.name === user.name) {
      return results; //* Si existe retornamos el mensaje
    } else {
      User.create(user); //* y si no existe, creamos el usuario
      count += 1;
    }

    if (count > 0) return `User "${user.name}" created successfully`;
  } catch (error) {
    console.log(error);
  }
};
