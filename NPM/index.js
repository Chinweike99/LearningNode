// QR generator

import inquirer from "inquirer";

inquirer
.prompt([
    {message: "TYpe your URL", name: "URL"},
])
.then((answers) => {
    console.log(answers)
})
.catch((error) => {
    if (error.isTtyError){

    }else{

    }
})