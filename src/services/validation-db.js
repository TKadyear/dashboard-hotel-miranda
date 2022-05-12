import digestMessage from "./digestString.js";

const findUser = (data, userMail) => {
  const infoUser = data.find(employee => employee.personal_info.email === userMail);
  return infoUser ? infoUser : null;
};
const validationPassword = async (user, { password }) => {
  const hashPassword = await digestMessage(password);
  return user.personal_info.password === hashPassword;
};
const fetchData = () => { //Quizás esto debería ir en el estado.
  fetch("../../public/mock/user-database.json")
    .then(response => response.json)
    .then(response => response)
    .catch(error => console.error(error));
}
const validationUser = async (data, login) => {
  const user = findUser(data, login);
  const isValid = await validationPassword(user, login)
  return isValid;
};

module.exports = { validationUser, validationPassword, findUser };
