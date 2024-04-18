//import the inquirer module
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence to count the words",
    },
]);
//trim is use to remove white space from stat and end not in between
//(" ") is round bracket between the inverted comma space is used to count aone complete word not a leeter
const word = answer.sentence.trim().split(" ");
//print the array of word on the console
console.log(word);
//print the word count on the sentence to the console
console.log(`Your Sentence word Count is: ${word.length}`);
