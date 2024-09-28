// JSON
//
// JSON stands for JavaScript Object Notation

// JSON looks similar to way of writing objects and arrays
// but there are few restrictions here

// using functions, bindings or anything involved that does 
// actual computation is not allowed in JSON

// Example for JSON data: about_json/example.json

let myInformationVariable = JSON.parse(`
    {
        "name": "Ogabek",
        "surname": "Sherakhmatov",
        "age": 21,
        "skills": ["keyboard typing" ,"coding" ,"problem-solving"],
        "isMarried": false
    }
    `)


console.log(myInformationVariable.isMarried)

console.log(myInformationVariable.surname)

console.log(myInformationVariable.name)

console.log(myInformationVariable.age)

console.log(myInformationVariable.skills)

for(skill of myInformationVariable.skills){
    console.log(skill)
}

