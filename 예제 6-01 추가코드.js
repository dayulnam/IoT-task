var suzi = new Person('Suzi');
suzi.__proto__.getName(); // undefined

///////////////////////////////////////

Person.prototype === suzi.__proto__ // true

///////////////////////////////////////

var suzi = new Person('Suzi');
suzi.__proto__._name = 'SUZI__proto__';
suzi.__proto__.getName(); // SUZI__proto__

///////////////////////////////////////

var suzi = new Person('SUZI', 28);
suzi.getName(); // SUZI
var iu = new Person('Jieun', 28);
iu.getName(); // Jieun
