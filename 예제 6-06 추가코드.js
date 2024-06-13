console.log(iu.__proto__.getName()); // undefined

///////////////////////////////////////

Person.prototype.name = '이지금';
console.log(iu.__proto__.getName()); // 이지금

///////////////////////////////////////

consol.log(iu.__proto__.getName.call(iu)); // 지금