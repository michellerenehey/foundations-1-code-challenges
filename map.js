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

// another options: 
// export function makeArrayOfNamesWithMap(arr){
//     return arr.map((dog) => {
//         return dog.name;
//     });
// }

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

// another option: 
// export function makeArrayWithIsHungry(arr) {
//     return arr.map((dog) => {
//         return { ...dog, isHungry: true }; 
//     }); 
// }

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

// another option: 
// export function makeShoutingArray(arr) {
//     return arr.map((dog) => {
//         return {name: dog.name.toUpperCase(), type: dog.type }
//     })
// }

/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    let newArray = arr.map(item => item.name + item.type);
    return newArray;
}

// another option
// export function makeStringArray(arr) {
//     return arr.map((dog) =>{
//         - return Object.values(dog).join(''); 
//         - return `${dog.name}${dog.type}`;
//     })
// }

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

export function makeArrayOfArraysOfArrays(arr) {
    return arr.map((dog)=> {
        return [['name', dog.name], ['type', dog.type]];
    });
}