//function reverse(str) {
//    const data = str.split('').reverse().join('')
 //   return str === data;
//}
function palindrome (str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i -1]
    })
}
console.log(palindrome('noon'))