import { User } from '../../lib/database/models/User';
import { Product, ProductModel } from '../../lib/database/models/Product';
import { UserAttributes } from '../../lib/database/models/User';

interface Email {
  email: string;
}

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
    // const allUsers = await User.findAll(); //* traemos todos los usuarios antes de crear
    console.log('USER', user);
    const oneUser = await User.findOne({
      where: {
        email: user.email,
      },
    });
    console.log('ONE USER', oneUser);
    if (oneUser) {
      return 'Log in'; //* Si existe retornamos el mensaje
    } else {
      if (user.name && user.email) {
        await User.create(user);
        count += 1;
        console.log(count, 'count');
      }
    }
    if (count > 0) return `User "${user.name}" created successfully`;
  } catch (error) {
    console.log(error);
  }
};

export const productBought = async (nombre: string, prod: any) => {
  try {
    const user = await User.findOne({
      where: { name: nombre },
      include: [Product],
    });
    console.log(user?.Products, 'ANTES');

    if (user) {
      // Verificar si 'Products' es un arreglo
      user?.Products.push(prod);
      // Guardar los cambios en la base de datos
      const newProd = await Product.bulkCreate(prod);
      await user?.$add('product', newProd);
      await user?.save();

      const updatedUser = await User.findByPk(user?.id, { include: [Product] });
      console.log(updatedUser, 'UPDATED USER');
      console.log(user?.Products, 'DESPUES');
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserByEmail = async (email: Email) => {
  try {
    const user = await User.findOne({ where: { email: email.email } });
    if (user) {
      return user;
    }
  } catch (error) {
    console.log(error);
  }
};
