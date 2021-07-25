const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}
/*console.log(destructivelyAppendCat("Ralph"));
console.log(cats);*/

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
//console.log(destructivelyPrependCat("Bob"));
//console.log(cats);

function destructivelyRemoveLastCat() {
    return cats.pop();
}
/*console.log(destructivelyRemoveLastCat());
console.log(cats);*/

function destructivelyRemoveFirstCat() {
    return cats.shift();
}
/*console.log(destructivelyRemoveFirstCat());
console.log(cats);*/

function appendCat(name) {
    return [...cats,name];
}
//console.log(appendCat("Broom"));

function prependCat(name) {
    return [name, ...cats];
}
//console.log(prependCat("Arnold"));


function removeLastCat() {
    return cats.slice(0,cats.length -1);
}
//console.log(removeLastCat());

function removeFirstCat() {
  return cats.slice(1);
}
//console.log(removeFirstCat());