import { sha256 } from "js-sha256";
// TODO Define a class for users

class Employee {
  id: string;
  constructor({ id, }) {
    this.id = id;
  }
}
export const findUser = (data: Array<object>, userMail: "string") => {
  const infoUser = [...data].find(employee => employee.personal_info.email === userMail);
  return infoUser ? infoUser : null;
};
export const validationPassword = (user: object, { password }: { password: string }) => {
  const hashPassword = sha256(password);
  return user.personal_info.password === hashPassword;
};
export type infoLogin = {
  user: string,
  password: string
};
export const validationUser = (data, login: infoLogin) => {
  const user = findUser(data, login.user);
  if (user != null) {
    const isValid = validationPassword(user, login);
    return isValid;
  }
  return false;
};

// module.exports = { validationUser, validationPassword, findUser };
