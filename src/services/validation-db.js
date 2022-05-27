import { sha256 } from "js-sha256";

export const findUser = (data, userMail) => {
  const infoUser = [...data].find(employee => employee.personal_info.email === userMail);
  return infoUser ? infoUser : null;
};
export const validationPassword = (user, { password }) => {
  const hashPassword = sha256(password);
  return user.personal_info.password === hashPassword;
};
export const validationUser = (data, login) => {
  const user = findUser(data, login.user);
  if (user != null) {
    const isValid = validationPassword(user, login);
    return isValid;
  }
  return false;
};

// module.exports = { validationUser, validationPassword, findUser };
