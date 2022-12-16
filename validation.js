let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; //found from stack overflow
let emailRegex = /[\w]*@[\w]*.{1}(com|gov|edu|io|net){1}/;
let zipCodeRegex = /(?<zip1>\d{5})([-]?(?<zip2>\d{4}))?(?<ERROR>.+)?/

const stateAbbreviations = [
    'AL', 'AK', 'AS', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
    'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY',
    'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'RI', 'SC', 'TN', 'TX',
    'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];


form = document.getElementById("submitBtn");
    
form.addEventListener("click", submitForm);
// let form = document.getElementById("button");
// form.addEventListener("click", validateForm);

function submitForm(ev){
    ev.preventDefault();
    ev.stopPropagation();

    validateForm();
    let form = document.getElementById("form-container")
    let successMsg = document.getElementById("success-message")
    let errorCount = 0;
    isValid = false;
    let allerrors = document.querySelectorAll(".errmsg"); //checks if there are any error msgs
    for(i of allerrors){
        if(i.innerHTML.length > 0){
            isValid = false;
            errorCount += 1;
        }
    }
    if(errorCount == 0){ //if there are no errors
        isValid = true;
    }
    else{//if there are errors
        isValid = false;
    }

    if(isValid){//display thank you if form is valid
        successMsg.style.display = "block"
        form.style.display = "none"
    }
    else{
        successMsg.style.display = "none";
    }
    
}


function validateForm(){
    checkRequired("first-name","first-name-error","First Name is Required");
    let firstName = document.getElementById("first-name");
    firstName.onchange = function(){checkRequired("first-name","first-name-error","First Name is Required")}


    checkRequired("last-name","last-name-error","Last Name is Required");
    let lastName = document.getElementById("last-name");
    lastName.onchange = function(){checkRequired("last-name","last-name-error","Last Name is Required")};
    

    checkRequired("address","address-error","Address is Required");
    let address = document.getElementById("address");
    address.onchange = function(){checkRequired("address","address-error","Address is Required")}

    checkRequired("city","city-error","City is Required")
    let city = document.getElementById("city");
    city.onchange = function(){checkRequired("city","city-error","City is Required")}

    checkRequired("state","state-error","State is Required")
    validateState("state","state-error","Not a valid State, enter two digit code e.g., UT");
    let state = document.getElementById("state");
    if(state.onchange = function(){checkRequired("state","state-error","State is Required")}){
        state.onchange = function(){validateState("state","state-error","Not a valid State, enter two digit code e.g., UT")}
    }
   

    checkRequired("Zip","zip-error","Zip Code is Required");
    checkFormat("Zip","zip-error",`malformedd zip-code, please use either "#####", or "#####-####" format.`,zipCodeRegex)
    let zip = document.getElementById("Zip");
    if(zip.onchange = function(){checkRequired("Zip","zip-error","Zip Code is Required")}){
        zip.onchange = function(){checkFormat("Zip","zip-error",`malformedd zip-code, please use either "#####", or "#####-####" format.`,zipCodeRegex)};

    }
    
    checkRequired("Email","email-error","Email Address is Required");
    checkFormat("Email","email-error","Email format is bad", emailRegex);
    let email = document.getElementById("Email");
    if(email.onchange = function(){checkRequired("Email","email-error","Email Address is Required")}){
        email.onchange = function(){checkFormat("Email","email-error","Email format is bad", emailRegex)}
    }

    checkRequired("Phone","phone-error","Phone is Required");
    checkFormat("Phone","phone-error","Phone format is bad",phoneRegex);
    let phone = document.getElementById("Phone");
    if(phone.onchange = function(){checkRequired("Phone","phone-error","Phone is Required")}){
        phone.onchange = function(){checkFormat("Phone","phone-error","Phone format is bad",phoneRegex)};
    }

    
    checkRequired("friend","check-error","Must check at least one!")
    let check = document.getElementById("find-info");
    check.onchange = function(){checkRequired("friend","check-error","Must check at least one!")}
}


function checkFormat(id,errid,msg,re){
    let el = document.getElementById(id);
    let err = document.getElementById(errid);
    let valid = false;

    if(!re.test(el.value)){
        el.style.bordercolor = "red";
        err.innerHTML = msg;
    }
    else{
        err.innerHTML = "";
        el.style.borderColor = "green";
        valid = true;
    }

    if (el.value.length == 0){
        err.innerHTML = id + " is Required"
        el.style.bordercolor = "red";
    }
    if(!valid){
        el.style.borderColor = "red";
    }
    return valid;
}

function validateState(id,errid,msg){
    let el = document.getElementById(id);
    let err = document.getElementById(errid);
    let upper = el.value.toUpperCase();
    let valid = false;

    if(!stateAbbreviations.includes(upper)){
        err.innerHTML = msg;
        el.style.borderColor = "red";
    }
    else{
        err.innerHTML = "";
        el.style.borderColor = "green";
        valid = true
    }
    if(el.value.length == 0){
        err.innerHTML = "State required";
    }
    return valid;
}

function checkRequired(id,errid,msg){
    let el = document.getElementById(id);
    let err = document.getElementById(errid)
    let valid = false;
    let type = el.type;
    
    
    switch(type){
        case "text":
            if (el.value.length == 0){//no input
                el.style.borderColor = "red";
                err.innerHTML = msg;
            }
            else{
                err.innerHTML = "";
                el.style.borderColor = "green";
                valid = true;
            }
            break;

        case "checkbox":
            let all = document.querySelectorAll('input[name="find-page"]')
            for(let i of all){
                if(i.checked){
                    valid=true
                }
            }
            if(!valid){
                err.innerHTML = msg
            }
            else{
                err.innerHTML = "";
            }
    }
    return valid;

}