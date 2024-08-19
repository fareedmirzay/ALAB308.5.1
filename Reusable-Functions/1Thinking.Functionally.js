//1. Take an array of numbers and return the sum.

function sumOfArray(numbers) {
    return numbers.reduce((total, sum) => total + sum, 0);
}
const results = sumOfArray([2,4,6,8,10,12,14,16,18,20]);
console.log(results);




//2. Take an array of numbers and return the average.

function averageArray(numbers) {
    if (numbers.length === 0) {
        console.log(0);
        return;
    }
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
    console.log(average); 
}

averageArray([2,4,6,8,10,12,14,16,18,20]);


// //3. Take an array of strings and return the longest string.

function longestArrayString(strings) {
    let longest = '';
    for (let str of strings) {
        if (str.length > longest.length) {
            longest = str;
        }
    }
    console.log(longest); 
}

longestArrayString(['Fig','apple', 'banana', 'blackberry ', 'date']);


// //4. Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// // For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThanNumbers(strings, length) {
    const result = strings.filter(str => str.length > length);
    console.log(result); 
}

stringsLongerThanNumbers(['say', 'hello', 'in', 'the', 'morning'],5,8,16,26,35,47);


// //5. Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printedNumbers(n) {
    if (n <= 0) return;
    printedNumbers(n - 1);
    console.log(n); 
}

printedNumbers(6);
