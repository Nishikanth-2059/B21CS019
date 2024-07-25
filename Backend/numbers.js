const express = require('express');
const number  = express();
const port = 9876;
const randn = [];
for (let i = 0; i<10; i++) {
    const num = Math.floor(Math.random() * 100) + 1;
    randn.push(num);
}
number.get('/',  (req, res) => {
    const nume = [];
    const numo = [];
    for(let i = 0; i<10 ; i++){
        if(randn[i] % 2 === 0){
            nume.push(randn[i]);
        }
        else{
            numo.push(randn[i]);
        }
    }
    const result = {even: nume, odd: numo};
    res.json(result);
    
});

number.listen(port, () => {
    console.log(`port number = ${port}`);
});
