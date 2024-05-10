//object 
let person = {
    name:"abdul",
    age:18,
    city:"chennai"
}
//accessing the object properties
console.log(person.name)//using dot notation
console.log(person['age'])//using square bracket notation

//modifying the object values
person.name = 'waheed'
person['age'] = 22
console.log(person)

//adding and deleting object properties

person.job = 'developer'
delete person.city
console.log(person)

//object methods

let person2 = {
    name:'john',
    age:30,  
    greet: function(){
        console.log("Hello, my name is " + this.name)
    }
}

person2.greet()

//object constructor

function Person(name , age){
    this.name = name
    this.age = age
    this.greet = function(){
        // console.log("Hello my name is " + this.name +" and my age is " + this.age)
        console.log(`Hi my name is ${this.name} and my age is ${this.age}`)
    }
}

let p1 = new Person('vijay',30)
let p2 = new Person('kamal',40)
console.log(p1.name)
console.log(p1.age)
console.log(p2.name)
console.log(p2.age)
p1.greet()
p2.greet()

//prototypal inheritance

function person3(name,age){
    this.name = name
    this.age = age
    
}
person3.prototype.greet = function(){
    console.log('hello ' + this.name)
}

let p = new person3('jack')
console.log(p.name)
p.greet()

//Object.Create() method

let personproto = {
    greet:function(){
        console.log('hello ' + this.name)
    }
}
let p4 = Object.create(personproto)
p4.name = 'john'
p4.greet()

//es6 class methods

class Personn{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`hello my name is ${this.name} and my age is ${this.age}`)
    }
}

let per = new Personn('john' , 30)
per.greet()

//getters and setters

let obj = {
    _name:'',
    
    get name (){
        return this._name
    },
    set name(value){
        if(value.length>0){
            this._name = value;
        }
        else{
            console.log('name cannot be empty')
        }
    }

}
obj.name = 'john'
console.log(obj.name)

//

const personer = {
    firstName: 'John',
    lastName: 'Doe',
    
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    
    set fullName(name) {
      const parts = name.split(' ');
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  
  console.log(personer.fullName); // Output: "John Doe"
  
  personer.fullName = 'Jane Smith';
  console.log(personer.firstName); // Output: "Jane"
  console.log(personer.lastName);  // Output: "Smith"
  

//object Destructuring

let persone = {
    name: 'John',
    age:30,
    city:'New York'
}

let {name ,age,city} = persone;
console.log(name)
console.log(city)


//spread operators

let obj1 = {a:1,b:2}
let obj2 = {c:3,d:4}

let mergedObj = {...obj1,...obj2};
console.log(mergedObj)

//nested objects

let details ={
    name:'John',
    age:30,
    address:{
        street:'123 main st',
        city:'New York',
        country:'USA',
        
    },
    hobbies:['reading','cooking','traveling']
}
let {address,hobbies} = details

console.log(address)
console.log(details.name)
console.log(details.address.city)
console.log(details.hobbies[0])


details.age = 35;
details.address.zipCode = '10001'
details.hobbies.push('painting')

console.log(details.age)
console.log(details.address.zipCode)
console.log(details.hobbies)

//to access the keys of an object

let keyy = {
    name:'Cena',
    age:'30',
    city:"New York"

}

let keys = Object.keys(keyy)
console.log(keys)

//Call,Apply,Bind

//Call
//it is used to invoke a function with a specified this value and individual arguments

let pe1 = {
    name:'Adam',
    age:30,
    greet:function(message){
        console.log(message + " my name is " + this.name)
    }
}


pe1.greet.call(pe1,'Hello')

//apply
//It is similar like call , but it accepts arguments as an array or array like object
let pe2 = {
    name:'Adam',
    age:30,
    greet:function(message){
        console.log(message + " my name is " + this.name)
    }
}

let message2 = ['hello']

pe2.greet.apply(pe2,message2)

//bind

let p3 = {
    name :'Tony',
    age:33,
    greet:function(message){
        console.log(message + "my name is " + this.name)

    }
}

let message3 = 'hello '
let greetFunc = p3.greet.bind(p3,message3)
greetFunc()


const date = new Date()
console.log(date)

///
const waheed = {
    firstName : "Abdul",
    lastName : "Waheed",
    age: 2023-2000,
    job:'Developer',
    friends:['hyder','muja','faizal'],
    bestfriend: function(){
        console.log(`${this.firstName} has ${this.friends.length} friends, and his best friend is called ${this.friends[0]}`)

    }

}
//dot notation
console.log(waheed.lastName)


//bracket notation
console.log(waheed['age'])

//bracket notation uses
//1

let key = "Name"
console.log(waheed['first'+ key] + " " +waheed["last"+key])

//2
// let interestedIn = prompt("What do you want know about Waheed ? firstName ,lastName ,age,job and friends")
// console.log(waheed[interestedIn])

////
waheed.bestfriend()
//
const abdul = {
    firstName : "Abdul",
    lastName : "Waheed",
    birthyeah: 2000,
    job:'Developer',
    friends:['hyder','muja','faizal'],
    hasDriverLicense:true,
    calcage :function(birthyeah){
        return 2023 - birthyeah
    }

    }
console.log(abdul.calcage(2000))


//tasks prac
//1
let user = {
    
}
user.name="John",
user.surname="Smith"
user.name = 'pete'
delete user.name
console.log(user)

let salaries = {
    john:100,
    Ann:160,
    Pete:130

}

let sume= salaries.john + salaries.Ann + salaries.Pete
let ans = sume ? sume : 0
console.log(ans)

//
let salariess = {
    John: 100,
    Ann: 160,
    Pete: 130,
    
  };
  
  let sum = 0;
  for (let key in salariess) {
    console.log(salaries[key])
    sum += salariess[key];
  
  }
  
  console.log(sum);

  //
  let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function MultiplyNum(obj){
    for(let key in obj){
        console.log(obj[key])
        if(typeof obj[key] == 'number' ){
            obj[key] *= 2;
        }
       
    
    }
    
}
MultiplyNum(menu)
console.log(menu)

//
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      console.log( this.step );
      return this
    }
  };

  //it will return the object iself for everycall

  
ladder.up().up().down().showStep().down().showStep()
//
let persona = {
    name: 'John',
    age: 25,
  };
  
  function introduce(greeting) {
    console.log(greeting + ', my name is ' + this.name + ' and I am ' + this.age + ' years old.');
  }
  
  // Using the call() method
  introduce.call(persona, 'Hello');
  // Output: Hello, my name is John and I am 25 years old.
  
  // Using the apply() method
  introduce.apply(persona, ['Hi']);
  // Output: Hi, my name is John and I am 25 years old.
  
  // Using the bind() method
  var boundIntroduce = introduce.bind(persona, 'Hey');
  boundIntroduce();
  // Output: Hey, my name is John and I am 25 years old.


  function fibonacci(n){
    let fib = [0,1]
    for(let i = 2;i<n;i++){
        fib[i] = fib[i-1]+fib[i-2]
    }
    return fib
  }
  console.log(fibonacci(20))


  function solution(str){
    let result = str.split("").reverse().join()
    return result
    
  }
  console.log(solution("yogesh"))



  






