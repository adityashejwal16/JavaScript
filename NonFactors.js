function NonFactors(no)
{
   
    for(let i = 1; i<= no; i++)
    {
        if(no % i != 0)
        {
            console.log("Non Factors are: " + i);
        }
    }   
}
function main()
{
    NonFactors(12);
}
main();