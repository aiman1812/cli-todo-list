#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta("Welcome to Aiman khalid - TO DO  list application"))


 let todo : string[] = ["typescript","python"];

    async function builttodo(todos:string[]){
    const operatorans = await inquirer.prompt([
        {
            name : "operator",
            message : (chalk.green("which operator do you want to perform")),
            type : "list",
            choices : ["add task","update task","view todo list","delete task"],
        },
]);
if(operatorans.operator === "add task") {
    const addtask= await inquirer.prompt([
        {
            name : "todo",
            mesage : (chalk.grey("what task do you want to add to you to do list")),
            type : "input",
        },
    ]);
    todo.push(addtask.todo);
    console.log(todos);
    
}  
if(operatorans.operator === "update task") {
    const updatetask = await inquirer.prompt([
        {
            name : "todo",
            message : (chalk.grey("what task do you want to update to you to do list")),
            type : "list",
            choices: todo.map(items => items),
        }
    ]); const addtask= await inquirer.prompt([
        {
            name : "todo",
            mesage : (chalk.grey("what task do you want to add to you to do list")),
            type : "input",
        },
    ]);
    let newtodo = todos.filter(val => val !== updatetask.todo);
    todos = [...newtodo,addtask.todo];
    console.log(todos);
}
if (operatorans.operator === "view todo list") {
    console.log(chalk.yellow("*****TO DO LIST*****"));
    console.log(todos);
    console.log(chalk.blue.italic("***************"));
}
if (operatorans.operator === "delete task"){
    const deletetask = await inquirer.prompt([
        {
            name : "todo",
            message : (chalk.grey("what task do you want to delelte to you do list")),
            type : "list",
            choices : todo.map(items => items),
        }
    ]);
    let newtodo = todos.filter(val => val !== deletetask.todo);
    todos = [...newtodo];
    console.log(todos);
}

console.log(chalk.yellow("*****GOOD BYE*****"));
}


builttodo(todo);