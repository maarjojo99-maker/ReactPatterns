// primitive: number , string , boolean
// more complex types: arrays, objects
// funtion types, parameters

// primitive:

let age: number;
age = 21;
let userName: string;
userName = 'Mohsin';
let isPlayer: boolean;
isPlayer = true;

// more complex types:

let hobbies: string[];
hobbies = ['sport', 'cookinhg'];

type Person = {
 name: string,
    age: number,
};


let person: Person;
   
person ={
    name: 'Moz',
    age: 32
};

// person ={
// isEmployee: true
// };


let people: Person[];

// type inference

let course: string | number = 'react - the complete guide';


course = 12789;

// function and type

function add(a: number , b: number){
    return a + b;
}

function print(value: any){
    console.log(value);
    
}


// generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updateArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a','b','c'], 'd')

//updateArray[0].split('');