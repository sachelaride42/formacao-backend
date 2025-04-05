const obj1 = {
    distancia: 1000
};

Object.defineProperty(obj1, 'ePlaneta', {
    value: true,
    enumerable: false
});

for(let chave in obj1) {
    console.log(chave);
}
// console.log(Object.keys(obj1));
// console.log(obj1.ePlaneta);