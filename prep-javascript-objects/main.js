var person = {
  firstName: 'James',
  lastName: 'Balemont',
  hobby:'Slaying demons'
};
console.log(person);

var fullName = person.firstName + " " + person.lastName;
console.log("The person's name is:", fullName);

person.job = "Monster Hunter";
console.log("This person's current job is:", person.job);

person.previousJob = "Drunkard";
console.log("This person's previous job was:", person.previousJob);

console.log(person);
