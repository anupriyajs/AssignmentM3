let num1=parseFloat(prompt("Enter first number:"));
let num2=parseFloat(prompt("Enter second number"));
if(num1>num2)
{
    document.write(`${num1} is greater than ${num2}`);
}
else if(num1===num2)
{
    document.write(`Both the numbers are equal to ${num2}`);
}
else
{
    document.write(`${num2} is greater than ${num1}`);
}

// if(num1!=num2)
// {
//     (num1>num2)?document.write(`${num1} is greater than ${num2}`): document.write(`${num2} is greater than ${num1}`);
// }
// else
// {
//     document.write(`Both the numbers are equal to ${num2}`);
//}   
