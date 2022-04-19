'use strict';

// const switcher = document.querySelector('.btn');
// switcher.addEventListener('click', function() {
//     document.body.classList.toggle('dark-theme')
//     appboy.logCustomEvent("changed-theme")
//     let className = document.body.className;
//     if(className == "light-theme") {
//         this.textContent = "Dark";
//     }
//     else {
//         this.textContent = "Light";
//     }
//     // console.log('current class name: ' + className);
// });

//signup form submission
const submitForm = () => {
    const text = document.getElementById("signup");
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    console.log(name.value, email.value)
    // text.textContent = "Form submitted!"
    // text.textContent = appboy.getDeviceId(function(deviceId) {deviceId}) //print device ID/user ID on page
    appboy.changeUser(email.value)
    appboy.getUser().setEmail(email.value)
    appboy.getUser().setFirstName(name.value)
    setTimeout(function(){ text.reset() }, 2000)
    // appboy.getUser().setGender() //need logic
    console.log(appboy.getUser().getUserId(x => console.log(x)))
    console.log("form submitted!")
}

const formButton = document.getElementById("form-button")
formButton.addEventListener("click", submitForm);

const submitEventForm = () => {
    const event = document.getElementById("event-name");
    console.log(event.value)
    appboy.logCustomEvent(event.value)
    event.value = ''
}

const eventButton = document.getElementById("event-button")
eventButton.addEventListener("click", submitEventForm);

const submitAttributeForm = () => {
    const attributeName = document.getElementById("attribute-name");
    const attributeValue = document.getElementById("attribute-value");
    console.log(attributeName.value, attributeValue.value)
    appboy.getUser().setCustomUserAttribute(
        attributeName.value,
        attributeValue.value
      );
      attributeName.value = '';
      attributeValue.value = '';
}

const attributeButton = document.getElementById("attribute-button")
attributeButton.addEventListener("click", submitAttributeForm);

const submitPushPrompt = () => {
    appboy.logCustomEvent("prime-for-push")
}

const pushPromptButton = document.getElementById("push-prompt-button")
pushPromptButton.addEventListener("click", submitPushPrompt);


const submitPurchaseForm = () => {
    const size = document.getElementById("cake-size");
    const flavor = document.getElementById("cake-flavor");
    console.log(size.value)
    console.log(flavor.value)
    appboy.logPurchase("Cake", 15, 1, {"Size": size.value, "Flavor": flavor.value})
}

const purchaseButton = document.getElementById("cake-button")
purchaseButton.addEventListener("click", submitPurchaseForm);
// let openModal = document.getElementsByClassName("flex-container-row");
// let modal = document.getElementsByClassName("aromodal-body");
// let span = document.getElementsByClassName("modal-close");
// // [0];

// // When the user clicks on the button, open the modal
// openModal.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



// const addToCartBtn = document.getElementsByClassName("single_add_to_cart_button");
//     const attributeValue = document.getElementById("attribute-value");    
//     const cartBox = document.getElementById("fdoe_mini_cart_id");
    // cartBox.textContent = 

/* <div class="fdoe_mini_cart" id="fdoe_mini_cart_id"></div> */

// class="wc-pao-addon-field wc-pao-addon-select"
// class="wc-pao-addon-field wc-pao-addon-select"


//add to the Your Order section
//when you click "Go to Checkout", submit purchase event
// appboy.logPurchase(productId: string, price: number, quantity?: number, purchaseProperties?: object): boolean
// addToCartBtn.addEventListener("click", submitPurchaseForm);

// appboy.logPurchase(’22’, 11.5, 1)

// trigger IAM off purchase
//get IAM on first session

//added_to_cart custom event 




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}