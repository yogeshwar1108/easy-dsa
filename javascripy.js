function prime()
{
    let x = document.getElementById("r1-inp1")
    let val = x.value
    let res = document.getElementById("r1-res1")
    let prime = 1;
    if(val<2)
    {
        prime = 0;
    }
    else
    {
        for(let i=2;i<val;i++)
        {
            if(val % i == 0)
            {
                prime = 0;
                break;
            }
        }
    }
    if(prime == 1)
    {
        res.innerHTML = val +  " It is PRIME NUMBER ";
    }
    else
    {
        res.innerHTML = val + " is not a PRIME NUMBER";
    }    
}
function Divisibilty()
{
    let x1 = document.getElementById("r2-inp1")
    let x2 = document.getElementById("r2-inp2")
    let x = x1.value
    let y = x2.value
    let check = 1;
    let res = document.getElementById("r2-res1")
    if(x%y == 0)
    {
        res.innerHTML = "Divisible Successfully"
    }
    else
    {
        res.innerHTML = "Not Divisible"
    }
}
function Power()
{
    let x1 = document.getElementById("r3-inp1")
    let x2 = document.getElementById("r3-inp2")
    let x = x1.value
    let y = x2.value
    let res = document.getElementById("r3-res1")
    let sum = 1;
    for(let i=1;i<=y;i++)
    {
        sum = sum * x;
    }
    res.innerHTML = sum;
}
function squrt()
{
    let d = document.getElementById("r4-inp1")
    let x = d.value
    let value = Math.sqrt(x);
    let res = document.getElementById("r4-res1")
    res.innerHTML = value;
}
function nthroot()
{
    let x1 = document.getElementById("r5-inp1")
    let x2 = document.getElementById("r5-inp2")
    let x = x1.value
    let y = x2.value
    let res = document.getElementById("r5-res1")
    let value = Math.pow(x,1/y);
    res.innerHTML = value;
}
function nthprime()
{
    let x1 = document.getElementById("r6-inp1")
    let x = x1.value
    let res = document.getElementById("r6-res1")
    let value = 1;
    while(x--)
    {
        value = nextprime(value);
    }
    function nextprime(value)
    {   
        let temp = value;
        for(let i=2;i<temp;i++)
        {

        }
    }
}