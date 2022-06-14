// Binding function in js 
//>Taking two objects and a function to bind
const person = { 
    firstName:"shree",
    lastName: "ram",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"jay",
    lastName: "Lakshman",
  }

  let fullName = person.fullName.bind(member);
  