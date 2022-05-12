const { validationUser, validationPassword, findUser } = require("../services/validation-db");

const database = [
  {
    id: 'b65ac584-5417-4f35-a5eb-80ac2ab832b7',
    personal_info: {
      firstName: 'Tamara',
      surname: 'Kadyear Saber',
      email: 'tk@hotelmiranda.com',
      password: '673b5679e74e4710ec2eda46745eef6251d5c570249896ba9a241ffecfee5892',
      telephone_number: '673567974'
    },
    job: { start_date: '09 May 2022', role: 'Manager', duties: 'Trabajar' },
    state: 'false'
  },
  {
    id: '254565ae-9bad-430f-beb4-40d063688f3f',
    personal_info: {
      firstName: 'Sergi',
      surname: 'Crespo',
      email: 'sCrespo@hotelmiranda.com',
      password: 'd167bea883cc5d018213fc1bac8e96a27cc6a6e4c5477e297c7a3de9d24efe16',
      telephone_number: '2560507172'
    },
    job: { start_date: '9 May 2022', role: 'Room Service' },
    state: false
  },
  {
    id: 'f7392195-77ac-48d2-bfd9-7356e7c1690e',
    personal_info: {
      firstName: 'Pedro',
      surname: 'Fierro',
      email: 'pFierro@hotelmiranda.com',
      password: '294e3f7c439f21523e05d66cc1aa7905a43e1f0ace3aae30b9d3776cbfc715b2',
      telephone_number: '7539593818'
    },
    job: { start_date: '10 May 2022', role: 'Manager' },
    state: true
  }
]


describe("Find Username in Database", () => {
  test("Existe", () => {
    // Arrange
    const login = { user: "pFierro@hotelmiranda.com", password: "Fierro" };
    const expectedValue = {
      id: 'f7392195-77ac-48d2-bfd9-7356e7c1690e',
      personal_info: {
        firstName: 'Pedro',
        surname: 'Fierro',
        email: 'pFierro@hotelmiranda.com',
        password: '294e3f7c439f21523e05d66cc1aa7905a43e1f0ace3aae30b9d3776cbfc715b2',
        telephone_number: '7539593818'
      },
      job: { start_date: '10 May 2022', role: 'Manager' },
      state: true
    };
    // ? Act
    const actualValue = findUser(database, login.user);
    //* Assert
    expect(actualValue).toEqual(expectedValue);
  })
  test("No existe", () => {
    // Arrange
    const login = { user: "125", password: "59dsa" };
    const expectedValue = null;
    // ? Act
    const actualValue = findUser(database, login.user);
    //* Assert
    expect(actualValue).toBe(expectedValue);
  })
})

describe("Is Valid the password", () => {
  test("True", async () => {
    // Arrange
    const login = { user: "pFierro@hotelmiranda.com", password: "Fierro" };
    const user_database = {
      id: 'f7392195-77ac-48d2-bfd9-7356e7c1690e',
      personal_info: {
        firstName: 'Pedro',
        surname: 'Fierro',
        email: 'pFierro@hotelmiranda.com',
        password: '294e3f7c439f21523e05d66cc1aa7905a43e1f0ace3aae30b9d3776cbfc715b2',
        telephone_number: '7539593818'
      },
      job: { start_date: '10 May 2022', role: 'Manager' },
      state: true
    };
    const expectedValue = true;
    // ? Act
    const actualValue = await validationPassword(user_database, login);
    //* Assert
    expect(actualValue).toBe(expectedValue);
  })
  test("False", async () => {
    // Arrange
    const login = { user: "pFierro@hotelmiranda.com", password: "fierro" };
    const user_database = {
      id: 'f7392195-77ac-48d2-bfd9-7356e7c1690e',
      personal_info: {
        firstName: 'Pedro',
        surname: 'Fierro',
        email: 'pFierro@hotelmiranda.com',
        password: '294e3f7c439f21523e05d66cc1aa7905a43e1f0ace3aae30b9d3776cbfc715b2',
        telephone_number: '7539593818'
      },
      job: { start_date: '10 May 2022', role: 'Manager' },
      state: true
    };
    const expectedValue = false;
    // ? Act
    const actualValue = await validationPassword(user_database, login);
    //* Assert
    expect(actualValue).toBe(expectedValue);
  })
})

describe("Validation User", () => {
  test("User email and password correct", async () => {
    // Arrange
    const login = { user: "pFierro@hotelmiranda.com", password: "Fierro" };
    const expectedValue = true;
    // ? Act
    const actualValue = await validationUser(database, login);
    //* Assert
    expect(actualValue).toBe(expectedValue);
  })
  test("User email is incorrect and password correct", async () => {
    // Arrange
    const login = { user: "pF@hotelmiranda.com", password: "Fierro" };
    const expectedValue = false;
    // ? Act
    const actualValue = await validationUser(database, login);
    //* Assert
    expect(actualValue).toBe(expectedValue);
  })
  test("User email is correct but the password is incorrect", async () => {
    // Arrange
    const login = { user: "pFierro@hotelmiranda.com", password: "fiero" };
    const expectedValue = false;
    // ? Act
    const actualValue = await validationUser(database, login);
    //* Assert
    expect(actualValue).toBe(expectedValue);
  })
})
