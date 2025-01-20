// let name="Davide";

// const user ={
// firstName:"davide",
// lastName:"chiarelli",
// age:24,
// location:"rome",

// presentation:function(){
//     return "hello my name is " + this.firstName + " my surname is :" + this.lastName + " my age is " + this.age + " live in : " + this.location;
// }

// }



// console.log(user.firstName);
// console.log(user.presentation())




// const UserZ =function() {
// this.firstName="";
// this.lastName="";
// this.age="";
// this.location="";


// };


// console.log(UserZ);

// const userX = new UserZ();
// userX.firstName="luca";
// userX.lastName="rossi";
// userX.age=28;
// userX.location="milan";

// console.log(userX);

// const userY = new UserZ();
// userY.firstName = "mario";
// userY.lastName = "neri";
// userY.age = 20;
// userY.location = "rome";

// console.log(userY);

// const Person = function( _firstName, _lastName, _age,_location){
//     this.firstName = _firstName;
//     this.lastName = _lastName;
//     this.age = _age;
//     this.location = _location;
// }

// const userA = new Person("davide", "chiarelli", 25, "rome");
// console.log(userA);


// class Dev extends Person{
//     constructor(_firstName, _lastName, _age,_location, _checkAge , _profile = []){

//         super(_firstName, _lastName, _age, _location);

//         this.checkAge=_checkAge;
//         this.profile = _profile
//     }
// }

// const userB =new Dev("giovanni", "toldo", 23, 25, ["htm","css","js"]);

// console.log(userB);

// // 

// class Lion{
//     constructor(name){
//         this.name = name;
//     }
//     roars(){
//         console.log(`${this.name} ruggisce`)
//     }
// }

// class Cat extends Lion {
//     constructor(name){
//         super(name)
//     }
//     miao(){
//         super.roars()
//     }

//     static catName(){
//         return "sirio"
//     }
// }

// let kitty=new Cat("fuffy");
// kitty.miao();

// console.log(Cat.catName(kitty));

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this._firstName = _firstName;
    this._lastName = _lastName;
    this._age = _age;
    this._location = _location;
  }
  checkAge(userY){
    if(this._age > userY._age){
        return `${this._firstName} è piu vecchio di  ${userY._firstName}`;
    }else{
        return `${this._firstName} è piu giovane di ${userY._firstName}`;
    }

}
}

const userX = new User("davide", "chiarelli", 24 , "rome");

const userY = new User("luca", "rossi", 25,"milan");

console.log(userX);
console.log(userY);

console.log(userY.checkAge(userX));
console.log(userX.checkAge(userY));

// esercizio 2
class Pet {
    constructor(_petName, _ownerName, _species,_breed){
        this.petName=_petName;
        this.ownerName=_ownerName;
        this.species=_species;
        this.breed=_breed;
    }

    checkOwner(owner){
        if(this.ownerName === owner.ownerName){
            return `${this.petName} ha lo stesso padrone di ${owner.petName} `
        }else{
             return `${owner.petName} ha un padrone diverso che si chiama ${owner.ownerName} rispetto al padrone di ${this.petName} che si chiama ${this.ownerName} `;
        }
    }
}

const pet1= new Pet("marley", "davide", "cane", "labrador");
const pet2 =new Pet("rosso", "luca", "pesce", "pesce rosso");
console.log(pet1);
console.log(pet2);
console.log(pet1.checkOwner(pet2));
