// Array.prototype.ikkigaBolish = function(){
//   let res = []
//   for (let i = 0; i < this.length; i++) {
//     if(typeof this[i] === "number"){
//       res.push(Math.ceil(this[i] / 2))
//     }
//   }
//   return res
// }

// let arr = [22, 55, 84, 63, 41, 9, "salom" ]
// console.log(arr.bolish());

// Array.prototype.project = function(){
// for (let i = 0; i < this.length; i++) {
//   for (let j = this.length - 1; j >= 0; j--) {
    
    
//   }
  
// }
// }

// let arr = [84, 92, 12, 30, 62, 74]
// arr.project()

// String.protoytype.stringToNumber = function(){
  
// }


// class MyMath {
//   static add(a, b) {
//     return a + b
//   }

//   static substract(a, b) {
//     return a - b
//   }
// }

// console.log(MyMath.substract(3, 5));

// class MyMath {
//   static add(a, b) {
//     return [a ** 2, b ** 2]
//   }

//   static substract(a, b) {
//     return a / b
//   }
// }

// console.log(MyMath.substract(3, 5));


//homework 
//1-masala
// function addArrayPrototype(arr) {
//     Array.prototype.double = function() {
//       let res = []
//       for(let i = 0; i < this.length; i++){
//         res.push(this[i] * 2)
//       }
//       return res
//     };
//     return arr.double();
// }


// 2-masala
// function addStringReverse(str){
//   String.prototype.reverse = function (){
//     let result = []
//     for(let i = this.length - 1; i >= 0; i-- ){
//       result += this[i]
//     }
//     return result
//   };
//   return str.reverse()
// }
// console.log(addStringReverse("hello"));


// 3-masala
// function addUserPrototype(name) {
//     function User(name) {
//       this.name = name;
//     }
//     User.prototype.sayHello = function(){
//       return "Hello " + this.name
//     }
//     return new User(name).sayHello();
// }

// 4-masala
// function multiObjectPrototype(name1, name2) {
//     function Car(name) {
//       this.name = name;
//     }
//     Array.prototype.getName = function(){
//       return this.name    
//     }
//     const a = new Car(name1);
//     const b = new Car(name2);
//     return [a.getName(), b.getName()];
// }

// 5-masala
// function customConcat(arr1, arr2) {
//     Array.prototype.myConcat = function(arr) {
//     let result = []
//     for(let i = 0; i < this.length; i++){
//       result[result.length] = this[i]
//     }
//     for(let j = 0; j < arr.length; j++){
//       result[result.length] = arr[j]
//     }
//     return result
//     };
//     return arr1.myConcat(arr2);
// }


// 6-masala
// function addKeysPrototype(obj) {
//     Object.prototype.myKeys = function() {
//       let result = []
//       for(let key in this){
//         if(this.hasOwnProperty(key)){
//           result.push(key)
//         }
//       }
//       return result
//     };
//     return obj.myKeys();
// }


// 7-masala
// function addAndDeletePrototype() {
//     const obj = {};
//     return obj.sayHi === undefined;
// }


// 8-masala
// function stringUpper(str) {
//     String.prototype.toUpperCustom = function() {
//       return this.toUpperCase()
//     };
//     return str.toUpperCustom();
// }


// 9-masala
// function arraySumPrototype(arr) {
//     Array.prototype.sum = function() {
//     let res = 0
//     for(let i = 0; i < this.length; i++){
//       res += this[i]
//     }
//     return res
//     };
//     return arr.sum();
// }


// 10-masala
// function objectValuesSum(obj) {
//     Object.prototype.valuesSum = function() {
//      let result = 0
//      for(let value in this){
//       if(this.hasOwnProperty(value)){
//         result += this[value]
//       }
//      }
//      return result
//     };
//     return obj.valuesSum();
// }

