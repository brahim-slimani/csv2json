## JS Library that allows to convert csv data into JSON objects
The Library takes care the input data as file or csv parsed to String

## Installation
`npm install jwt-decoder-claims` or `yarn add jwt-decoder-claims`

## Usage
```javascript
import parser from "convert-csv2json";

const csvString = "name;age;email;phone\nMoahmed;20;mohamed@gmail.com;0564433289\nAli;28;ali@gmail.com;0564893289\nAhmed;34;ahmed@gmail.com;0590433289";

/*** convert the csv string into json ***/
const csvTojson = parser.csv2json(csvString, ";"); //the function csv2json needs two input parameters csv in String format and the delimiter symbol
console.info(csvTojson);

// prints :
// [
//     {
//         "name": "Mohamed",
//         "age": 20,
//         "email": "mohamed@gmail.com",
//         "phone": "0564433289"
//     },
//     {
//         "name": "Ali",
//         "age": 28,
//         "email": "ali@gmail.com",
//         "phone": "0564893289"
//     },
//     {
//         "name": "Ahmed",
//         "age": 34,
//         "email": "ahmed@gmail.com",
//         "phone": "0590433289"
//     }
// ]
```

**Important!** In case of malformed token it will throw an exception of invalid token error.<br/>
It is recommanded to combine the decoding function with a Promise object or add try/catch block
<br/>

**Convert csv data file into json**
You have to pass the target event files[0] as parameter within the delimiter symbol once the csv file has been uploaded through chosen file
```javascript
import parser from "convert-csv2json";

//The function use .then() implicitly to return a promise 
parser.csvFile2json(e.target.files[0], ";").then((result) => {
    console.log(result);
}error => {
    console.error(error);
});
```

## For CommonJS usage
```javascript
const parser = require('convert-csv2json');
```

## Github repository
If you have any contribution request, feature or if you found a bug or any issue please report them to this [github repository](https://github.com/slimani-ibrahim/csv2json.git)

<!-- ## Demo application
jwt-decoder-claims has been used to decode the JWTs in this simple tool [checkout here](https://slimani-ibrahim.github.io/jwt-decoder-tool/)<br/>
Here is the [github repository](https://github.com/Slimani-Ibrahim/jwt-decoder-tool) for any feature or contribution. -->

## Author
[Ibrahim Slimani](https://slimani-ibrahim.github.io/profile)
    js, csv, json
}