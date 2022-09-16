const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given")
const checkButton=document.querySelector("#check-btn");
const message=document.querySelector("#error-msg");
const noOfNotes=document.querySelectorAll("#no-of-notes");

const avaliableNotes=[2000,500,200,100,50,20,10,5,1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMassage();
    if (billAmount.value>0){
        if (billAmount.value>= cashGiven.value){
            var amountToBeReturn=cashGiven.value-billAmount.value;
            calculateChange(amountToBeReturn);
        }else{
            showMassge("do you wanna wash plate's")
        }

    }else{
       showMassge("invalide amount")
    }
});


function calculateChange(){
    for (var i=0;i<avaliableNotes.length;i++){
        const numberOfNotes=Math.trunc(amountToBeReturn/avaliableNotes[i]);
        amountToBeReturn%avaliableNotes[i];   
        noOfNotes[i].innerText=numberOfNotes;     

    }

}

function hideMassage(){
    message.style.display="none"
}


function showMassge(msg){
    message.style.display="block";
    message.textContent=(msg)
}