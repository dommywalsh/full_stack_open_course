const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);

console.log(range(10, 100));
