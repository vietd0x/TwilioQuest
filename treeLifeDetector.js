const arg = process.argv[2];
let val = Number(arg);
if(val === 0){
    console.log('alive');
}
else if(val > 0)
{
    console.log('other');
}
