document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("user-name");
    const avatarSelect = document.getElementById("avatar-select");
    const submitButton = document.getElementById("submit-button");
    const savedData = document.getElementById("saved-data");
    const selectInfo = document.getElementById("select-info");

    submitButton.addEventListener("click", function() {
        const userName = nameInput.value;
        const selectedAvatar = avatarSelect.value;
        savedData.innerHTML = `Name: ${userName}<br>Ícone: ${selectedAvatar}`;
        selectInfo.classList.add("hidden");
    });
});
