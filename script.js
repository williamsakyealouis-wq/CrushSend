// Get elements from the page
const startBtn = document.getElementById("startBtn");

const confessionSection =
    document.getElementById("confessionSection");

const previewSection =
    document.getElementById("previewSection");

const successSection =
    document.getElementById("successSection");

const method =
    document.getElementById("method");

const recipient =
    document.getElementById("recipient");

const recipientLabel =
    document.getElementById("recipientLabel");

const message =
    document.getElementById("message");

const counter =
    document.getElementById("counter");

const previewBtn =
    document.getElementById("previewBtn");

const previewMessage =
    document.getElementById("previewMessage");

const sendBtn =
    document.getElementById("sendBtn");

const backBtn =
    document.getElementById("backBtn");

const newBtn =
    document.getElementById("newBtn");


// Start button
startBtn.addEventListener("click", function () {

    document.querySelector(".welcome").classList.add("hidden");

    confessionSection.classList.remove("hidden");

});


// Change recipient field depending on method
method.addEventListener("change", function () {

    if (method.value === "email") {

        recipientLabel.textContent = "Crush's email";

        recipient.type = "email";

        recipient.placeholder =
            "Enter email address";

    } else {

        recipientLabel.textContent = "Crush's phone number";

        recipient.type = "tel";

        recipient.placeholder =
            "Enter phone number";

    }

});


// Message character counter
message.addEventListener("input", function () {

    counter.textContent = message.value.length;

});


// Preview button
previewBtn.addEventListener("click", function () {

    const recipientValue =
        recipient.value.trim();

    const messageValue =
        message.value.trim();


    if (recipientValue === "") {

        alert(
            "Please enter your crush's email or phone number."
        );

        recipient.focus();

        return;
    }


    if (messageValue === "") {

        alert(
            "Please write your confession first."
        );

        message.focus();

        return;
    }


    if (messageValue.length < 3) {

        alert(
            "Your message is too short."
        );

        message.focus();

        return;
    }


    previewMessage.textContent =
        messageValue;


    confessionSection.classList.add("hidden");

    previewSection.classList.remove("hidden");

});


// Back button
backBtn.addEventListener("click", function () {

    previewSection.classList.add("hidden");

    confessionSection.classList.remove("hidden");

});


// Send button
sendBtn.addEventListener("click", function () {

    /*
     * IMPORTANT:
     * This is currently the frontend stage.
     * Real email/SMS delivery will be connected
     * to the secure backend later.
     */

    previewSection.classList.add("hidden");

    successSection.classList.remove("hidden");

});


// New confession button
newBtn.addEventListener("click", function () {

    successSection.classList.add("hidden");

    confessionSection.classList.remove("hidden");

    recipient.value = "";

    message.value = "";

    counter.textContent = "0";

    previewMessage.textContent = "";

});
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./sw.js")
            .then(() => {
                console.log("CrushSend service worker registered.");
            })
            .catch((error) => {
                console.error(
                    "Service worker registration failed:",
                    error
                );
            });
    });
}  