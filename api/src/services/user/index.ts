//! service de users
interface user {
  name: string;
  email: string;
  password: string;
  picture: string;
}

export const getAllUser = async () => {};

export const create = async (user: user) => {};
