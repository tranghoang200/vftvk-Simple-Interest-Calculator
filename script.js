  function rate(){
    var ratevalue=document.getElementById("interestRateate");
    document.getElementById("r").innerHTML=ratevalue.value+"%";
  }

//   function compute(){
//     var ratevalue=parseFloat(document.getElementById("interestRateate").value);
//     var principal=parseFloat(document.getElementById("amount").value);
//     var time=parseFloat(document.getElementById("nberOfYears").value);
//     var total= parseFloat(principal*(1+((ratevalue/100)*(time))));
//     if(document.getElementById("amount").value==""){
//       alert("Please enter the principal amount");
//     } else if(document.getElementById("amount").value <= 0){
//       alert("Please enter a positive number");
//     } else {
//       var today=new Date();
//       var year=today.getFullYear();
//       time+=year;
//       var sortie="If you deposit ";
//       sortie+=principal;
//       sortie+=" RWF at an interest rate of "
//       sortie+=ratevalue;
//       sortie+="%.";
//       sortie+=" You will receive an amount of ";
//       sortie+=total;
//       sortie+=" RWF in the year ";
//       sortie+=time
//       document.getElementById("resultat").innerHTML=sortie;
//     }
//     }   
function compute()
{
    var principal = document.getElementById("amount").value;
    
    var rate = document.getElementById("interestRateate").value;
    var years = parseInt(document.getElementById("nberOfYears").value);
    var interest = principal*years*rate/100;

    var noOfYear = 2020 + years;
    var output = document.getElementById("resultat");

    if(principal == ""){
        alert("Amount should not be empty");
        document.getElementById("amount").focus();
        return false;
    }
    else if(principal <= 0 )
    {
        alert("Enter a positive Amount");
        document.getElementById("amount").focus();
    }
    else
    {
        output.innerHTML="If you deposit "+"<mark>"+principal+"</mark>"+",<br>"+
        "at an interest rate of "+"<mark>"+rate+"</mark>"+"%.<br>"
        +"You will receive an amount of "+"<mark>"+interest+"</mark>"
        +",<br>"+"in the year "+"<mark>"+noOfYear+"</mark>";
    }

}
