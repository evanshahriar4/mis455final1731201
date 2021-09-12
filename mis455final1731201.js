
function disCalculation(){
let name = document.getElementById("nameField").value ;
let age = document.getElementById("ageField").value ;
let monthly = document.getElementById("monthlyField").value ;
let yearly = document.getElementById("yearlyField").value ;
let total= monthly+ yearly;
let discount
let name = 



if (age> 50 && yearly>2000){
    discount = total * .20+ total;
    return discount;
}

if (age>30 && monthly>=250){
    payable = total * .15+ total;
    return discount;
}
else { 
    payable;
    
}

}

let DISCOUNT = disCalculation (monthly,yearly);


let payable = monthly+yearly;
    
document.getElementById("nameField").value = '' ;
document.getElementById("ageField").value = ''  ;
document.getElementById("monthlyField").value = '' ;
document.getElementById("yearlyField").value = '' ;

}