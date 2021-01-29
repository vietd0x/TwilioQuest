const arg = process.argv[2];
let val = Number(arg);
if(val === 0)
{
    console.log('alive');
}
else if(val === 1)
{
    console.log('flowering');
}
else if(val === 2)
{
    console.log('shedding');
}
else if(val > 2)
{
    console.log('other');
}