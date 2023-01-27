const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "Key Phrases DO NOT MATCH!";
		message.style.display = "block";
		kp2.style.backgroundColor = "#aa3333";
		kp2.style.color = "#fff";
		kp2.focus();
		kp2.value = "";
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

var d = new Date();

// Set the value of the "date" field
document.getElementById("date").value = d.toDateString();

// Set the value of the "time" field
var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;
