function factor(no)
{
    for(let i = 1; i<= no; i++)
    {
        if(no % i == 0)
        {
           console.log("Factors is : "+ i);
        }
    }
        
}
function main()
{
    factor(12);
}
main();