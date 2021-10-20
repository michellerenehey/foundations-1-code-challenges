// Use the map method to solve these problems!

/*
Input:

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    let newArray = arr.map(item => item.name);
    return newArray;
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    let newArray = arr.map(item => ({ name: item.name, isHungry: true, type: item.type })); 
    return newArray;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    let newArray = arr.map(item => ({ name: item.name.toUpperCase(), type: item.type }));
    return newArray;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    let newArray = arr.map(item => item.name + item.type);
    return newArray;
}

// [
//     { name: 'spot', type: 'dog' },
//     { name: 'rover', type: 'dog' },
//     { name: 'jumpy', type: 'frog' },
//     { name: 'einstein', type: 'cat' },
// ]

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

// export function makeArrayOfArraysOfArrays(arr) {
//     let newArray = arr.map(item => 
//         // use Object.entries(arr)) to get the arrays
//     console.log(newArray);
//     return [];
// }