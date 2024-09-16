
let num0 = 0;
let num1 = 0;

function loop (){
    num0 = prompt ("number");
 num0 = Number(num0);
    console.log ("Number Entered " + num0);

if (num0 > 0);

    num1 = promt ("second number");
num1 = Number(num1);
    console.log ("Numbers entered " + num1);
    
 

    
    setTimeout(loop,2000);
}
loop();