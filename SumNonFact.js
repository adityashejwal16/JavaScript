function SumNonFact(no)
{
    let iSum = 0;
    for(let i = 1; i<= no; i++)
    {
        if(no % i != 0)
        {
             console.log("Non Factors are: " + i);
             iSum = iSum + i;  
        }
    }
     console.log("Sum Non Factors is :" + iSum);
        
}
function main()
{
    SumNonFact(12);
}
main();