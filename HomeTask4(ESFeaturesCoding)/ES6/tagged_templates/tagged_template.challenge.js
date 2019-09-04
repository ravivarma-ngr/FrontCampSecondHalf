//With the template provided, write a template tag that will validate an SQL statement:
//Only SELECT or UPDATE statements are valid - write validation logic which allows only SELECT, UPDATE
//The passwords table cannot be altered
//there is no order by clause, add it and order by asc
// When done, return the reconstructed query or a note any errors

let city = `Chicago` //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `SELECT *`;
let table = `USERS`;
let whereClauses = [
    `uid = ${2 + 1} OR city = "${city}" `
]
let order = `ORDER BY asc`

// Your code to call the tag and log the return value here...
// your output should be - SELECT * FROM USERS WHERE uid = 3 OR city = chicago ORDER BY asc
// Spread syntax is a more common and easy here if you are comfortable with it
function checkQuery(words, ...values) {
    let finalQuery;
    console.log(values);
    let state = values[0].split(" ")[0].toUpperCase();
    if (state ==="SELECT" || state ==="UPDATE" &&
        !(state ==="UPDATE" && values[1] === "PASSWORDS")) {
        finalQuery = values[0] + words[1] + values[1] + words[2] + values[2]
            + values[3];
        return (finalQuery);
    }
    return "Invalid Query";

}
const selectQuery = checkQuery`${command} FROM ${table} WHERE ${[...whereClauses]}  ${order}`;
console.log(selectQuery);