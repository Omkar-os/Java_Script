function Maximum(Brr)
{
    let iCnt = 0;
    let iMax = Brr[0];
    for(iCnt = 1; iCnt < Brr.length; iCnt++)
    {
       if(Brr[iCnt] > iMax);
    }
}

function main()
{
    const Brr = [10,20,30,40,50];
    let iRet = 0;

    iRet =  Maximum(Brr);
    
    console.log("Maximum element is :")
}

main();