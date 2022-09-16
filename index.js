const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given")
const checkButton=document.querySelector("#check-btn");
const message=document.querySelector("#error-msg");


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    if (billAmount.value > 0){

    }else{
       message.innerText="invalide amount";
    }
});

