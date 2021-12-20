const colors = [
	"green",
	"tomato",
	"azure",
	"blue",
	"coral",
	"chocolate",
	"cyan",
	"gold",
	"lavender",
];

const color = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
	const randomNumber = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});
