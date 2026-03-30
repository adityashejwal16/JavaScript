function SumFact(no)
{
    let iSum = 0;
    for(let i = 1; i<= no; i++)
    {
        if(no % i == 0)
        {
             console.log("Factors are: " + i);
             iSum = iSum + i;  
        }
    }
     console.log("Sum Factors is :" + iSum);
        
}
function main()
{
    SumFact(12);
}
main();