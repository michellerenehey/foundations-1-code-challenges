// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    let newString = Object.keys(someObject).join(); 
    return newString;
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    let objKeys = Object.keys(someObject); 
    let objValues = Object.values(someObject); 
    let newObject = {};
    objKeys.forEach((key, i) => {
        const newObjectKey = key.toUpperCase(); 
        newObject[newObjectKey] = objValues[i]; 
    }); 
    return newObject;
}

// another option:
// export function makeMoreScreamingKeys(someObject) {
//     let newObj = {}; 
//     let keys = Object.keys(someObject); 
//     keys.forEach((key) => {
//         let upperCaseKey = key.toUpperCase(); 
//         newObj[upperCaseKey] = someObject[key]; // someObject[key] is the value
//     })
//     return newObj;
// }

// a third option: 
// export function makeMoreSreamingKeys(someObject) {
// for(let [key, value] of Object.entries(someObject)){
//     makeMoreScreamingKeys[key.toUpperCase()] = value; 
// }
//     return makeMoreScreamingKeys;
// }

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    let newArray = []; 
    newArray = Object.entries(someObject); 
    return newArray;
}
