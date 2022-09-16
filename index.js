const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given")
const checkButton=document.querySelector("#check-btn");
const message=document.querySelector("#error-msg");


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    message.style.display="none"
    if (billAmount.value>0){
        if (billAmount.value>= cashGiven.value){

        }else{
            showMassge("do you wanna wash plate's")
        }

    }else{
       showMassge("invalide amount")
    }
});

function showMassge(msg){
    message.style.display="block";
    message.textContent=(msg)
}