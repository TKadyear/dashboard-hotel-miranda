# Data Structure
## Contact
```javascript
message:{
  id:{
    type: String,
    required: true,
    default: generateUniqueId()//Hay que hacer una función que genere un random ID o buscar una librería.
  }
  customer:{
    fullName:{
      type: String,
      required: true
    },
    email:{
      type: String, //Comprobación con un regex
      required: true
    },
  },
  review:{
    title:{
      type: String,
      required: true
    },
    comment:{
      type:String,
      required: true
    },
    date:{
      type: String "D Mon YY",// No se si tipo Date o String
      required: true
    },
  },
  archived:{
    type: Boolean,
    required: true,
    default: false
  }
}
```
## Booking
```javascript
roomBooked:{
  id:{
    type: String,gu
    required: true,
    default: generateUniqueId()//Hay que hacer una función que genere un random ID o buscar una librería.
  },
  guest:{ // FullName of the guest
      type: String,
      required: true
    },
  order_date:{
    type: "DD/MM/AA 00:00",// No se si tipo Date o String
    required: true
  },
  booking:{
    check_in:{
    type: "DD/MM/AA 00:00",// No se si tipo Date o String
    required: true
   },
    check_out:{
    type: "DD/MM/AA 00:00",// No se si tipo Date o String
    required: true
    },
    price:{
      type: Number,
      required: true
    }
  },
  special_request:{
    type: String,
    required: false
  },
  room:{
    id:{
      type: String,// Quizás para esto es mejor consultar a la base de datos que tiene esta habitación sola y no guardarla, para no tener datos duplicados.
      // GET /room/:id/info
      required: true
    },

  },
  status:{
    type: String,// ['check in', 'check out', 'in progress']
    required: true,
    default: evaluateStatus()//Una función que evalua si esta en curso(in progress, fecha de check in o de fecha de checkout)
  }
}

```
## Room
```javascript
room:{
  id:{
    type: String,
    required: true,
    default: generateUniqueId()//Hay que hacer una función que genere un random ID o buscar una librería.
  },
  info:{
    photos:{
      type: Array, //min 3 images, max 5
      required: true
    },
    bedType:{
      type: String,//https://www.warehousehotel.com/manheim/blog/different-bed-sizes-in-hotels
      required: true
    },
    number:{
      type: Number,
      required: true
    },
    description:{
      type: String,
      required: true
    },
    facilities:{// Before Amenities
      type: Array,
      required: true
    }
  },
  rate:{ //Befor price
    type: Number,
    required: true
  },
  offer:{
    type: Boolean,
    required: true
  },
  discount:{
    type: Number,
    required: false
  },

  available:{
    type: Boolean,
    required: true,
    default: isAvailable()//Una función que busca según id si esta disponible o no.
  }
}
```
## Users
```javascript
user:{
  id:{
    type: String,
    required: true,
    default: generateUniqueId()//Hay que hacer una función que genere un random ID o buscar una librería.
  },
  personal_info:{
    firstName:{
      type: String,
      required: true
    },
    surname:{
      type: String,
      required: true
    },
    email:{
      type: String, //Comprobación con un regex
      required: true
    },
    password:{
      type: String, //hash in LocalStorage and the password is the surname
      required: true
    }
    telephone_number:{
      type: String, //Comprobación con un regex
      required: true
    },
    photo:{
      type: String,
      required: false
    },
  },
  job:{
    start_date:{
      type: 'DD/MM/AA 00:00',// String or Date
      required: true
    }
    role:{
      type: String, // ['Manager', 'Recepción', 'Servicio de habitaciones']
      required: true
    },
    duties:{
      type: String,
      required: true
    }

  }
  state:{
    type: Boolean,
    required: true,
    default: isActive()//Una función que mira si esta conectado
  }
}
```
