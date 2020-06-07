            //Case 1 

var rand=Math.random();
rand=Math.floor((rand*20)+1);

ask="Please guess the number from 0 - 20"

var chance=3;

for (i=3;i>0;i--)

{
   chance--;
   var user = prompt(ask);

if (user == rand)
{
   alert("Right guess")
}
else 
{
   //alert("Oops! Wrong guess. The number was"+ rand)
   alert("Oops! Wrong guess.Chances remaining"+ chance )
}
console.log()
}