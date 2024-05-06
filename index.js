// array-enhancer.js

// Function to get the sum of all numbers in an array
function sum(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}


// Function to remove duplicate elements from an array
function unique(array) {
    return [...new Set(array)];
}

// Function to filter out even numbers from an array
function filterEven(array) {
    return array.filter(num => num % 2 === 0);
}

// Function to filter out odd numbers from an array
function filterOdd(array) {
    return array.filter(num => num % 2 !== 0);
}

// Function to find the maximum number in an array
function max(array) {
    return Math.max(...array);
}

// Function to find the minimum number in an array
function min(array) {
    return Math.min(...array);
}

// Function to reverse the elements of an array
function reverse(array) {
    return array.reverse();
}

// Function to sort the elements of an array in ascending order
function sortAscending(array) {
    return array.sort((a, b) => a - b);
}

// Function to sort the elements of an array in descending order
function sortDescending(array) {
    return array.sort((a, b) => b - a);
}

// Function to clear all repeated numbers from an array
function clearDuplicates(array) {
    return [...new Set(array)];
}

const utils = {
    sum,
    unique,
    filterEven,
    filterOdd,
    max,
    min,
    reverse,
    sortAscending,
    sortDescending,
    clearDuplicates
};

module.exports = utils;