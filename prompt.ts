////////////////////////npm i inquirer///////////////////////////////
//////////////////////npm i --save-dev @types/inquirer//////////////////
import inquirer from "inquirer";
let isfriend= await inquirer.prompt([
    {
        name :"name",
        type:"string",
        message:"Enter Your friend name"
    }
]   
)
if(isfriend.name==="Ameen"||isfriend.name==="Bisma"){
    console.log(`${isfriend.name}you are my friend`);
}
else{
    console.log(`${isfriend.name}you are not my friend`);
}
