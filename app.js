'use strict';

const submitForm = () => {
    const text = document.getElementById("signup");
    const email = document.getElementById("email");
    const name = document.getElementById("name");
    console.log(name.value, email.value)
    // text.textContent = "Form submitted!"
    // text.textContent = appboy.getDeviceId(function(deviceId) {deviceId}) //print device ID/user ID on page
    appboy.changeUser(email.value)
    appboy.getUser().setEmail(email.value)
    setTimeout(function(){ text.reset() }, 2000)
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
    console.log(size.value,flavor.value)
    appboy.logPurchase("Cake",15,"USD",1, {"Size": size.value, "Flavor": flavor.value})
    const text = document.getElementById("cart");
    text.textContent = `Item: 1 Cake, ${flavor.value}, ${size.value}`
    // appboy.logCustomEvent("Added to Cart")
}

const purchaseButton = document.getElementById("cake-button")
purchaseButton.addEventListener("submit", submitPurchaseForm);


//add to the Your Order section
//when you click "Go to Checkout", submit purchase event
// appboy.logPurchase(productId: string, price: number, quantity?: number, purchaseProperties?: object): boolean
// addToCartBtn.addEventListener("click", submitPurchaseForm);

// appboy.logPurchase(’22’, 11.5, 1)

// trigger IAM off purchase
//get IAM on first session

//added_to_cart custom event 



// Cake modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}