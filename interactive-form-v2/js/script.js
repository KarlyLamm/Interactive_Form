

const form = document. querySelector('form');

const name = document.querySelector('#name');

const email = document.querySelector('#mail');

const phone = document.querySelector('#phone')

//job Roles
const jobRole = document.querySelector('#title');
const otherJobOption = document.querySelector('#title option[value="other"]');
const otherJobInput = document.querySelector('#other-title');

//design and color variables
const designTheme = document.querySelector('#design option');
const designSelect = document.querySelector('#design');

const colorTheme = document.createElement('option');
const colorSelect = document.querySelector('#color');

const jsIsLyfe = document.querySelector('#design option[value="jsIsLyfe"]');
const jsIsLyfeColor1 = document.querySelector('#color option[value="blue"]');
const jsIsLyfeColor2 = document.querySelector('#color option[value="grey"]');
const jsIsLyfeColor3 = document.querySelector('#color option[value="gold"]');

const heartJs = document.querySelector('#design option[value="heart js"]');
const heartJsColor1 = document.querySelector('#color option[value="orange"]');
const heartJsColor2 = document.querySelector('#color option[value="steelblue"]');
const heartJsColor3 = document.querySelector('#color option[value="black"]');

const activities = document.querySelector('.activities');
const costMsg = document.createElement('element');
activities.appendChild(costMsg);
let totalCost = 0;

//payment variables
const payment = document.querySelector('#payment');
const paymentMethod = document.querySelector('#payment option[value="select method"]');

const creditcard = document.querySelector('#credit-card');
const creditcardOption = document.querySelector('#payment option[value="credit card"]');
const creditcardValue = document.querySelector('#payment option[value="credit card"]').getAttribute('value');

const paypal = document.querySelector('#paypal');
const paypalOption = document.querySelector('#payment option[value="paypal"]');
const paypalValue = document.querySelector('#payment option[value="paypal"]').getAttribute('value');

const bitcoin = document.querySelector('#bitcoin');
const bitcoinOption = document.querySelector('#payment option[value="bitcoin"]');
const bitcoinValue = document.querySelector('#payment option[value="bitcoin"]').getAttribute('value');

const adTrade = document.querySelector('#adTrade');
const adTradeOption = document.querySelector('#payment option[value="adTrade"]');
const adTradeValue = document.querySelector('#payment option[value="adTrade"]').getAttribute('value');



name.focus();


otherJobInput.hidden = true;

jobRole.addEventListener('change', ()=>{

    if( otherJobOption.selected ){
        otherJobInput.hidden = false;
    } else {
        otherJobInput.hidden = true;
    }

});

designTheme.hidden = true;

colorTheme.textContent = "Please select a T-shirt theme";
colorSelect.appendChild(colorTheme);
colorTheme.selected = true;

const colors = document.querySelectorAll('#color option');
for ( let i = 0; i < colors.length; i ++ ){

    colors[i].hidden = true;

}


designSelect.addEventListener('change', () => {

    if( jsIsLyfe.selected === true ){
        jsIsLyfeColor1.selected = true;
        jsIsLyfeColor1.hidden = false;
        jsIsLyfeColor2.hidden = false;
        jsIsLyfeColor3.hidden = false;
        heartJsColor1.hidden = true;
        heartJsColor2.hidden = true;
        heartJsColor3.hidden = true;
    }
    if( heartJs.selected === true ){
        heartJsColor1.selected = true;
        heartJsColor1.hidden = false;
        heartJsColor2.hidden = false;
        heartJsColor3.hidden = false;
        jsIsLyfeColor1.hidden = true;
        jsIsLyfeColor2.hidden = true;
        jsIsLyfeColor3.hidden = true;
    }  

});


activities.addEventListener('change', (e) => {

    const inputClicked = event.target;
    const inputAtt = inputClicked.getAttribute('data-cost');
    const inputCost = parseInt(inputAtt);
    
    if( inputClicked.checked ){
        totalCost += inputCost;
    } else {
        totalCost -= inputCost;
    }
    costMsg.innerHTML = "Total : $" + totalCost;

    const dayAndTime = inputClicked.getAttribute('data-day-and-time');
    const checkboxes = document.querySelectorAll('.activities input');

    for ( let i = 0; i < checkboxes.length; i ++ ){

        const currentCheckbox = checkboxes[i].getAttribute('data-day-and-time');

        if( dayAndTime === currentCheckbox && inputClicked !== checkboxes[i] ){
            if( inputClicked.checked ){
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
            }
        }

    }

});


paymentMethod.hidden = true;
paypal.style.display = 'none';
bitcoin.style.display = 'none';
adTrade.style.display = 'none';

payment.addEventListener('change', () => {

    if( creditcardOption.selected ){
        creditcard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
        adTrade.style.display = 'none';
    } else if ( paypalOption.selected ) {
        paypal.style.display = 'block';
        creditcard.style.display = 'none';
        bitcoin.style.display = 'none';
        adTrade.style.display = 'none';
    } else if ( bitcoinOption.selected ){
        bitcoin.style.display = 'block';
        creditcard.style.display = 'none';
        paypal.style.display = 'none';
        adTrade.style.display='none' ;
    } else if ( adTradeOption.selected){
        adTrade.style.display = 'block';
        bitcoin.style.display = 'none';
        creditcard.style.display = 'none';
        paypal.style.display = 'none';

    }

});


const nameValidator = () => {

    const nameValue = name.value;
    let nameLabel = document.querySelector('label[for="name"]');
    
    if( /^\D+$/.test(nameValue) ){
        name.style.border = '';
        nameLabel.style.color = '';
        nameLabel.textContent = "Name:";
        return true;
    } else {
        name.style.border = "3px solid red";
        nameLabel.style.color = "red";
        nameLabel.innerHTML = "<strong>Please enter your name</strong>";
        return false;
    }
    
}

const emailValidator = () => {

    const emailValue = email.value;
    const emailLabel = document.querySelector('label[for="mail"]');
    
    if( /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue)){
        email.style.border = '';
        emailLabel.style.color = '';
        emailLabel.textContent = "Email:";
        return true;
    } else {
        email.style.border = "3px solid red";
        emailLabel.style.color = "red";
        emailLabel.innerHTML = "<strong>Please enter your email address</strong>";
        return false;
    }
    
}

const phoneValidator = () => {

    const phoneValue = phone.value;
    const phoneLabel = document.querySelector('label[for="phone"]');
    
    if(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phoneValue)){
        phone.style.border = '';
        phoneLabel.style.color = '';
        phoneLabel.textContent = "Phone Number:";
        return true;
    } else {
        phone.style.border = "3px solid red";
        phoneLabel.style.color = "red";
        phoneLabel.innerHTML = "<strong>Please enter a valid phone number</strong>";
        return false;
    }
    
}


const activityValidator = () => {

    const activityLegend = document.querySelector('.activities legend');
    const checkboxes = document.querySelectorAll('.activities input');

    for( let i = 0; i < checkboxes.length; i ++ ){
        if(checkboxes[i].checked){
            activityLegend.style.color = '';
            activityLegend.textContent = "Register for Activities";
            return true;
        }
    }

    activityLegend.style.color = 'red';
        activityLegend.innerHTML = "<strong>Please choose at least one from the activity list</strong>"
        return false;

    
}


const ccNumvalidator = () => {

    const creditcardNumber = document.querySelector('#cc-num');
    const ccNumValue = creditcardNumber.value;
    const ccNumLabel = document.querySelector('label[for="cc-num"]');

    if( creditcardOption.selected || paymentMethod.selected ){

        if( /^\d{13,16}$/.test(ccNumValue)){
            creditcardNumber.style.border = '';
            ccNumLabel.style.color = '';
            ccNumLabel.textContent = "Card Number:";
            return true;
        } else {
            creditcardNumber.style.border = '3px solid red';
            ccNumLabel.style.color = 'red';
            ccNumLabel.textContent = "Invalid Card Number";
            return false;
        }

    } else {
        return true;
    }
   
}

const ccZipValidator = () => {

    const creditcardZip = document.querySelector('#zip');
    const ccZipValue = creditcardZip.value;
    const ccZipLabel = document.querySelector('label[for="zip"]');

    if( creditcardOption.selected || paymentMethod.selected ){

        if( /^\d{5}$/.test(ccZipValue)){
            creditcardZip.style.border = '';
            ccZipLabel.style.color = '';
            ccZipLabel.textContent = "Zip Code:";
            return true;
        } else {
            creditcardZip.style.border = '3px solid red';
            ccZipLabel.style.color = 'red';
            ccZipLabel.textContent = "Invalid Zip Code";
            return false;
        }
    } else {

        return true;

    }

    
}


const cvvValidator = () => {

    const creditcardCvv = document.querySelector('#cvv');
    const cvvValue = creditcardCvv.value;
    const cvvLabel = document.querySelector('label[for="cvv"]');

    if( creditcardOption.selected || paymentMethod.selected ){

        if( /^\d{3}$/.test(cvvValue)){
            creditcardCvv.style.border = '';
            cvvLabel.style.color = '';
            cvvLabel.textContent = "CVV:";
            return true;
        } else {
            creditcardCvv.style.border = '3px solid red';
            cvvLabel.style.color = 'red';
            cvvLabel.textContent = "Invalid CVV";
            return false;
        }

    } else {
        return true;
    }
       
}








form.addEventListener('submit', (e)=> {
    
    if( ! nameValidator() ){
        e.preventDefault();
    } 
    
    if( ! emailValidator() ){
        e.preventDefault();
    } 
    
    if( ! activityValidator() ){
        e.preventDefault();
    } 
    
    if( ! ccNumvalidator() ){
        e.preventDefault();
    } else {
        return true;
    }
    
    if( ! ccZipValidator() ){
        e.preventDefault();
    } else {
        return true;
    }
    
    if( ! cvvValidator() ){
        e.preventDefault();
    } else {
        return true;
    }
    if( ! phoneValidator() ){
        e.preventDefault();

    } else{
        return true;
    }

});

