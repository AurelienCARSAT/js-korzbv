// arrow funtion

// ES5 
var mafunction = function( arg){
  console.log(arg)
  return arg
}

// ES6
let mafunttion  = (arg , arg2) => {
  return arg
}

//
let mafunction =arg => arg


// ES5
var dog = {
  fullname : 'le chien',
  toys : ['ballon', 'balle'],
  getToys : function (){
    // ici this fait référence à dog !
    console.log(this.toys)
    var self = this
    this.toys.forEach( function(t){
      console.log(this.fullname) // focntionne pas car contexte diff ==> on crée var pour passer le contexte 
      console.log(self.fullname + ' joue avec ' + t)
    })
  }
}

dog.getToys()

// ES6
// avec les Arrow funtion, on ne crée pas de nouveau contexte, ça permet d'utiliser le this dans la fonction fille
const dog = {
  fullname : 'le chien',
  toys : ['ballon', 'balle'],
  getToys : function (){
    // ici this fait référence à dog !
    console.log(this.toys)
    this.toys.forEach( (t) =>
      console.log(this.fullname + ' joue avec ' + t)
    )
  }
}

dog.getToys()



// SPREAD OPERATOR ou REST OPERATOR
const fruits = [ 'bananes', 'pommes']
const vegetables = ['poireaux', 'carottes']

const food = [...fruits , ...vegetables]

console.log(food)

const mixer = (...ings) => {
  console.log(ings)
  ings.forEach((i) =>{
  console.log(i)
  })
}
mixer('kiwi' , 'pomme' , 'banane')
mixer(...fruits , ...vegetables)
mixer()

// Templates de Strings
const name = 'Aurelien'
console.log(`Bonjour ${name.toUpperCase()}.`)


// CLASS en ES5
function Car(brand, color){
  this.brand = brand
  this.color = color
}
// On déclare les méthode de la classe en dehors de la fonction
Car.prototype.klaxonne() = fonction(){
  console.log('tutu')
} 

var myCar = new Car('BMW' , 'ROUGE')

myCar.klaxonne
console.log(myCar)
myCar.color

// CLASS ES6, on peut définir les méthiodes dans la définition de la classe 
class Car{
  constructor(brand , color){
    this.brand = brand
    this.color = color
  }
  klaxonne(text = 'truc'){
    console.log(text)
  }
}