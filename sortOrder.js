const firstVal = process.argv[2].toLowerCase();
const secondVal = process.argv[3].toLowerCase();
if(firstVal < secondVal)
{
    console.log(-1);
}
else if(firstVal > secondVal)
{
    console.log(1);
}
else
    console.log(0);