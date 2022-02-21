"use strict";

const Tyzik = new StrayDog("Tyzik");
console.log(Tyzik);
console.log(Tyzik.sleep());
console.log(Tyzik.barking());
console.log(Tyzik.eat());

console.log(Tyzik.catchCats());
console.log(Tyzik.catchCats());
console.log(Tyzik.catchCats());
console.log(Tyzik.catchCats());
console.log(Tyzik.catchCats());

console.log(
  `Сейчас у ${Tyzik.nickname} ${Tyzik.numberOfCapturedCats} пойманных котов!`
);

console.log(Tyzik.eat());
console.log(Tyzik.eat());
console.log(Tyzik.eat());
console.log(Tyzik.eat());

// const TestDog = new StrayDog(1, '22', '');