var yearinput = document.getElementById("yearinput")
var ageElement= document.getElementById("age")
var typeElement=document.getElementById("type")
var asterisk=document.getElementById("asterisk")
function calcage()
{
    var date =new Date()
    var currentyear = date.getFullYear()
    var age= currentyear-yearinput.value
    
    ageElement.innerHTML=age;
if(age>=18)
{
    typeElement.innerHTML= "you are young"
}


else
{
    typeElement.innerHTML= "you are kid"

}

if(age>30)
    {
        typeElement.innerHTML= "you are metur"
    
    } 

   
    if(age>50)
    {
        typeElement.innerHTML= "you are old"
    
    } 
   
var x=""
for(i=0 ; i<age ; i++)
{
 x+="*"   
}


asterisk.innerHTML= x

     } 