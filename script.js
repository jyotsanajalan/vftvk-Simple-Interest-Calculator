function validateprincipal()
{
    var principal=document.getElementById("principal").value;
    if (principal<=0){
        alert("Enter a positive number");
    }
}
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest=(principal*years*rate)/100;
    var amount=(principal*1+interest*1);
    var year=new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"

}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
