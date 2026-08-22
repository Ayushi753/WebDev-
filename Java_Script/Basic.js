let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
 


//WAP For identifying gender
function identify(name, gender)
{
    if(gender === "male")
    {
        console.log(name + " Hello Mr");
    }
    else if(gender === "female")
    {
        console.log(name + " Hello Mdmji");
    }
    else 
    {
    console.log(name + " Hello");
    }
}
// Function ko call kro bro
identify("Aarya","female");
