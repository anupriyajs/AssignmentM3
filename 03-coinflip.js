let coinFlip=Math.round(Math.random()*9);
alert(coinFlip)
let choice=prompt("Select Heads or Tails");
if(coinFlip<=5)
{
    //Heads
    if (choice=="Heads")
    {
            alert("The flip was heads and you chose heads...you win!")
    }
    else
    {
            alert("The flip was heads but you chose tails...you lose!")
    }
}
else
{
    //Tails
    if (choice=="Heads")
    {
            alert("The flip was tails but you chose heads...you lose!")
    }
    else
    {
            alert("The flip was tails and you chose tails...you win!")
    }
}
