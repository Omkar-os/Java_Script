function Display(Brr)
{
    let iCnt = 0;
    for(iCnt = 1; iCnt < Brr.length; iCnt++)
    {
        console.log(Brr[iCnt]);
    }
}

function main()
{
    const Brr = [10,20,30,40,50];
    Display(Brr)
}

main();