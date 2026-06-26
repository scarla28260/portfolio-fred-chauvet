const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('C:/Users/scarl/OneDrive/Documents/OneDrive/Desktop/Dossier Transition pro/cv.pdf');
pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(e => console.error(e));
