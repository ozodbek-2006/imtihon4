// // 1. 
// function teskariArray(str) {
//     return str.split('').reverse().map(Number);
// }
// console.log(teskariArray("34567")); 
// // 3. 
// function arrayHosilQilish(n) {
//     let arr = [];
//     for (let i = 1; i <= n; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(arrayHosilQilish(5)); 

// // 4. 
// function toqJuftAjratish(arr) {
//     let toq = 0;
//     let juft = 0;
//     arr.forEach(num => {
//         if (num % 2 === 0) {
//             juft += num;
//         } else {
//             toq += num;
//         }
//     });
//     return [toq, juft];
// }
// console.log(toqJuftAjratish([10, 30])); 

// // 5. 
// function remove(str) {
//     return str.split('!').join('');
// }
// console.log(remove("Hello! World!!")); 

// // 6.
// function arraySum(arr1, arr2) {
//     let sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
//     let sum2 = arr2.reduce((acc, curr) => acc + curr, 0);
//     return sum1 + sum2;
// }
// console.log(arraySum([1, 2, 3], [4, 5, 6])); 

// // 7. 
// function FirstAndLast(str) {
//     let arr = str.split('');
//     arr.shift();
//     arr.pop();
//     return arr.join('');
// }
// console.log(FirstAndLast("hello"));

// // 8. 
// function Array(arr) {
//     let result = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result.push(arr[i]);
//     }
//     return result;
// }
// console.log(Array([1, 2, 3, 4])); 

// // 9.
//  function joinadd(str) {

    
//  }