const button1 = document.getElementById("button1");
const popupContainer = document.getElementById("popupContainer");

document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const buttonRect = button1.getBoundingClientRect();

    const offsetX = buttonRect.width / 2;
    const offsetY = buttonRect.height / 2;

    button1.style.left = `${clientX - offsetX}px`;
    button1.style.top = `${clientY - offsetY}px`;
});

button1.addEventListener("click", () => {
    // Show congratulations screen
    showCongratulations();
});


function showCongratulations() {
    // Clear existing content in popupContainer
    popupContainer.innerHTML = '';

    // Create popup content
    const popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");

    // Congratulations message in German
    const congratulationsMessage = document.createElement("p");
    congratulationsMessage.textContent = "Herzlichen Glückwunsch! 🎉 Wir sind offiziell ein Paar! 💑";

    // Close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "Schließen";
    closeButton.addEventListener("click", closePopup);

    // Append content to popup
    popupContent.appendChild(congratulationsMessage);
    popupContent.appendChild(closeButton);
    popupContainer.appendChild(popupContent);

    // Show the popup
    popupContainer.style.display = "flex";
}

function closePopup() {
    popupContainer.style.display = "none";
}