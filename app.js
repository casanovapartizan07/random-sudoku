"use strict";

const inputElement = document.querySelector("#randomInput");
const randomElements = document.querySelectorAll(".cell");
const inviteButton = document.querySelector(".invite-btn");

inviteButton.addEventListener("click", function () {
	const count = parseInt(inputElement.value);
	if (!isNaN(count) && count > 0 && count <= randomElements.length) {
		const randomIndices = [];
		while (randomIndices.length < count) {
			const randomIndex = Math.floor(Math.random() * randomElements.length);
			if (!randomIndices.includes(randomIndex)) {
				randomIndices.push(randomIndex);
			}
		}

		randomElements.forEach((element, index) => {
			if (randomIndices.includes(index)) {
				element.textContent = generateRandomNumber();
				element.classList.add("light-blue");
			} else {
				element.textContent = "";
				element.classList.remove("light-blue");
			}
		});
	} else {
		alert("Iltimos, 1 dan 81 gacha to'g'ri raqam kiriting.");
	}
});

function generateRandomNumber() {
	return Math.floor(Math.random() * 10) + 1;
}
