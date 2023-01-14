// Dark Mode

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("dark_mode")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.innerHTML = '<span class="material-symbols-outlined">brightness_5</span>'
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>'
	}
});