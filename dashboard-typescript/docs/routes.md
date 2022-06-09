# Routes
## Modelos que gestionar:
- Bookings
- Rooms
- Users
- Contact

## ¿Qué hacen cada uno?

- Bookings
  - Tiene todas las reservas hechas.
  - (Read)

---
## CRUD
### Bookings
1) Create
  Crea una reserva
  Lee todas habitaciones reservadas
  ```
  Route : POST /booking
  Response Body: { "booking":The Newly-Created Room Booked  }
  Success Response Code: 200
  ```
2) Read
  Lee todas habitaciones reservadas
  ```
  Route : GET /booking
  Response Body: { "booking": [ Array of All Rooms Booked ] }
  Success Response Code: 200
  ```
3) Read a specific room
  Lee una habitación reservada
  ```
  Route : GET /booking/:id
  Response Body: { "booking": {Object with data of Booked Room} }
  Success Response Code: 200
  ```
4) Update a specific room
  Actualiza el estado de una reserva
  ```
  Route : PUT /booking/:id
  Response Body: { "booking": The updated room now saved in the database }
  Success Response Code: 200
  ```

5) Delete
  Entiendo que es cancelar/eliminar la reserva en la base de datos
  ```
  Route : DELETE /booking/:id
  Response Body: None
  Success Response Code: 204
  ```

### Rooms
1) Create
  No debería tener ya que las habitaciones son fijas en los Hoteles dependen de la construcción.
2) Read
  Lee todas las habitaciones
  ```
  Route : GET /rooms
  Response Body: { "rooms": [ Array of All Rooms ] }
  Success Response Code: 200
  ```
3) Read a specific room
  Lee los datos de una habitación
  ```
  Route : GET /rooms/:id
  Response Body: { "rooms": {Object with data of Room} }
  Success Response Code: 200
  ```
4) Update a specific room
  Actualiza el estado de una habitación en concreto
  ```
  Route : PUT /rooms/:id
  Response Body: { "booking": The updated room now saved in the database }
  Success Response Code: 200
  ```

6) Delete
  Eliminar la habitación en la base de datos
  ```
  Route : DELETE /rooms/:id
  Response Body: None
  Success Response Code: 204
  ```

### Users
1) Create
  Crear la cuenta de un/a nuevo/a empleado/a.
  ```
  Route : POST /users
  Response Body: { "users":The Newly-Created User  }
  Success Response Code: 200
  ```
2) Read
  Lee todos/as los empleados/as
  ```
  Route : GET /users
  Response Body: { "users": [ Array of All Employees ] }
  Success Response Code: 200
  ```
3) Read a specific users
  Lee los datos de un/a empleado/a.
  ```
  Route : GET /users/:id
  Response Body: { "users": { Object with data of the Employee} }
  Success Response Code: 200
  ```
4) Update a User
  Actualiza los datos de un/a empleado/a.
  ```
  Route : PUT /users/:id
  Response Body: { "users": The updated employee now saved in the database }
  Success Response Code: 200
  ```

5) Delete
  Eliminar empleado/a de la base de datos
  ```
  Route : DELETE /users/:id
  Response Body: None
  Success Response Code: 204
  ```
### Contact

1) Create
  Crear el mensaje de contacto (por parte del cliente)
  ```
  Route : POST /contact
  Response Body: { "message":The Newly-Created Message  }
  Success Response Code: 200
  ```
2) Read
  Lee todos/as las contact
  ```
  Route : GET /contact
  Response Body: { "message": [ Array of All messages ] }
  Success Response Code: 200
  ```
3) Update a User
  Actualiza los datos de una mensaje de contacto
  ```
  Route : PUT /contact/:id
  Response Body: { "message": The updated review now saved in the database }
  Success Response Code: 200
  ```

4) Delete
  Eliminar review de la base de datos
  ```
  Route : DELETE /contact/:id
  Response Body: None
  Success Response Code: 204
