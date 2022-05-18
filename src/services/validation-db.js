import { sha256 } from "js-sha256";

export const findUser = (data, userMail) => {
  const infoUser = [...data].find(employee => employee.personal_info.email === userMail);
  // console.log(userMail, infoUser);
  return infoUser ? infoUser : null;
};
const validationPassword = (user, { password }) => {
  // console.log(user.personal_info.firstName, user.personal_info.password)
  const hashPassword = sha256(password);
  return user.personal_info.password === hashPassword;
};
export const validationUser = (data, login) => {
  const user = findUser(data, login.user);
  // console.log(user)
  if (user != null) {
    const isValid = validationPassword(user, login);
    return isValid;
  }
  return false;
};

// module.exports = { validationUser, validationPassword, findUser };
