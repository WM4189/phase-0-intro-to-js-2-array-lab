// const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat(name) {
//     return cats.push(name);
// }
// destructivelyAppendCat("Ralph");


// function destructivelyPrependCat(name) {
//     return cats.unshift(name);
// }
// destructivelyPrependCat("Bob");


// function destructivelyRemoveLastCat() {
//     return cats.pop();
// }
// destructivelyRemoveLastCat();


// function destructivelyRemoveFirstCat() {
//     return cats.shift();
// }
// destructivelyRemoveFirstCat();


// function appendCat(name) {
//     return [...cats,name];
// }
// appendCat("Broom");

// function prependCat(name) {
//     return [name, ...cats];
// }
// prependCat("Arnold");


// function removeLastCat() {
//     return cats.slice(0,cats.length -1);
// }
// removeLastCat();

// function removeFirstCat() {
//   return cats.slice(1);
// }
// removeFirstCat();


// do it again //

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat(newCat);

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat(newNewCat);

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name) {
    let newArray = [...cats];
    newArray.push(name);
    return newArray;
}
appendCat(newCat);

function prependCat(name) {
    let newArray = [...cats];
    newArray.unshift(name);
    return newArray;
}
prependCat(newCat);

function removeLastCat() {
    let newArray = [...cats];
    newArray.pop();
    return newArray;
}

function removeFirstCat() {
    let newArray = [...cats];
    newArray.shift();
    return newArray;
}