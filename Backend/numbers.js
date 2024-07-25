const express = require('express');
const number  = express();
const port = 9876;
const randn = [];
for (let i = 0; i<10; i++) {
    const num = Math.floor(Math.random() * 100) + 1;
    randn.push(num);
}
number.get('/numbers/even', (req, res) => {
    const nume = [];
    var n = 0, avg = 0;
    for(let i=0; i<10 ; i++){
        if(randn[i]%2 === 0){
            nume.push(randn[i]);
            avg += randn[i];
            n++;
        }
    }
    avg /= n;
    const result = {orginalNumbers: randn, evenNumbers: nume, average: avg};
    res.json(result);
});
number.get('/numbers/odd', (req, res) => {
    const numo = [];
    var n = 0, avg = 0;
    for(let i=0; i<10 ; i++){
        if(randn[i]%2 != 0){
            numo.push(randn[i]);
            avg += randn[i];
            n++;
        }
    }
    avg /= n;
    const result = {orginalNumbers: randn, evenNumbers: numo, average: avg};
    res.json(result);
});
number.get('/numbers',  (req, res) => {
    var avg = 0;
    for(let i=0; i<10 ; i++){
        avg += randn[i];
    }
    avg /= 10;
    const result = {randomNumbers: randn, average: avg};
    res.json(result);
    
});

number.listen(port, () => {
    console.log(`port number = ${port}`);
});
