// OBJECT LITERALS
const person = {
    firstName: 'John',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
  }
  
  // Get single value
  console.log(person.name)
  
  // Get array value
  console.log(person.hobbies[1]);
  
  // Get embedded object
  console.log(person.address.city);
  
  // Add property
  person.email = 'jdoe@gmail.com';