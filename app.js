'use strict';

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    appboy.logCustomEvent("changed-theme")
    let className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    // console.log('current class name: ' + className);
});

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




