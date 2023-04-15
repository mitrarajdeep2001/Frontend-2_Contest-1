const array = [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];

// PrintDeveloperbyMap() - console.log all the employees which have the profession of developer using the map function.
function PrintDeveloperbyMap(arr) {
    const developersByMap = arr.map((element) => {
        if (element.profession === 'developer') {
            console.log(element.name);
        }
    }) 
}
PrintDeveloperbyMap(array);

// PrintDeveloperbyForEach() - console.log all the employees which have the profession of developer using the for each function.
function  PrintDeveloperbyForEach(arr) {
    const developerByForEach = arr.forEach((element) => {
        if (element.profession === 'developer') {
            console.log(element.name);
        }
    })
}
PrintDeveloperbyForEach(array);

// addData() - In this function make another such employee object and append that in this array. Example - push this in the array - {id:4,name:"susan",age:"20",profession:"intern"} and then console.log it.
function addData(arr, element) {
    arr.push(element);
    return arr;
}
console.log(addData(array, {id:4,name:"susan",age:"20",profession:"intern"}));

// removeAdmin() - In this function remove the object where the profession is admin. console.log the changed array.
function removeAdmin(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].profession === 'admin') {
            arr.splice(i, 1);
        }
    }
    return arr;
}
console.log(removeAdmin(array));

// ConcatinateArray() - Make another array with 3 objects just like the one in the above given array.The objects should be different, with different ids and all other paramters should be different too. Then concatinate these 2 arrays, and console.log.
function ConcatinateArray(arr1, arr2) {
    return arr1.concat(arr2);
}
let array2 = [{id:5,name:"robert",age:"28",profession:"doctor"},{id:6, name:"alex",age:"25", profession:"chef"},{id:7, name:"charles", age:"30",profession:"advocate"}];
console.log(ConcatinateArray(array, array2));
