
const person = ['anis', 'nanis', 'sonis', 'khanis', 'danis'];

const sortPerson = person.sort()

// console.log(sortPerson)

// const numbers = [1,8,3,5,7,2,4,6,9];
// const sortNumbers = numbers.sort();

// console.log(sortNumbers);

const numbers = [1, 8, 13, 5, 47, 12, 48, 26, 9];

const sortNumbers = numbers.sort(function (a, b) {
    return (a - b)
})
// console.log(sortNumbers)

const num = [1, 8, 13, 5, 47, 12, 48, 26, 9];

const sortNum = num.sort(function (a, b) {
    return (b - a)
})

console.log(sortNum)