const submit = document.querySelector("#submit");
const firstName = document.querySelector("#firstName");
const lastName =document.querySelector("#lastName");
const email =document.querySelector("#emailAdd")
const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");
const error5 = document.querySelector(".error5");
const error6 = document.querySelector(".error6");
const general = document.querySelector(".general");
const support = document.querySelector(".support");
const supportR = document.querySelector("#supportR");
const generalE = document.querySelector("#generalE")
const message = document.querySelector("#message");
const success = document.querySelector(".success");
const checkBox = document.querySelector("#checkBox");

submit.addEventListener("click", (e)=> {

    let allValid = true;

    if(firstName.value === ""){
        firstName.style.borderColor = "red";
        error1.style.display = "block";
        e.preventDefault(); 
        resetForm();
        allValid = false;
    }
    if(lastName.value === ""){
        lastName.style.borderColor = "red";
        error2.style.display = "block";
        e.preventDefault();
        resetForm();
        allValid = false;
    }
    if(email.value === ""){
        email.style.borderColor = "red";
        error3.style.display = "block";
        e.preventDefault();
        resetForm();
        allValid = false;
    }
    if(!supportR.checked && !generalE.checked){
        error4.style.display = "block";
        e.preventDefault();
        resetForm();
        allValid = false;
    }
    if(message.value.trim() === ""){
        message.style.borderColor = "red";
        error5.style.display = "block";
        e.preventDefault();
        resetForm();
        allValid = false;
    }
    if(!checkBox.checked){
        error6.style.display = "block";
        e.preventDefault();
        resetForm();
        allValid = false;
    }
    
    if(allValid){
        showSuccess();
        e.preventDefault();
        validForm();
    }
   
});

general.addEventListener("mouseover", (e) =>{
    general.style.borderColor = "hsl(169, 82%, 27%)";
    general.style.color = "hsl(169, 82%, 27%)";
});

general.addEventListener("mouseout", (e) =>{
    general.style.borderColor = "black";
    general.style.color = "black";
});

support.addEventListener("mouseover", (e) =>{
    support.style.borderColor = "hsl(169, 82%, 27%)";
    support.style.color = "hsl(169, 82%, 27%)";
});

support.addEventListener("mouseout", (e) =>{
    support.style.borderColor = "black";
    support.style.color = "black";
});

function resetForm (){
    setTimeout(function() {
        error1.style.display ="none";
        firstName.style.borderColor = "black";

        error2.style.display ="none";
        lastName.style.borderColor = "black";

        error3.style.display ="none";
        email.style.borderColor = "black";

        error4.style.display = "none";
        
        message.style.borderColor = "black";
        error5.style.display = "none";

        error6.style.display = "none";
    }, 2000)
};

function showSuccess(){
    success.style.display = "block";
};

function validForm(){
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    supportR.checked = false;
    generalE.checked = false;
    message.value = "";
    checkBox.checked = false;

}