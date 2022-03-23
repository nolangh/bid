<<<<<<< HEAD
/* ---------------------------- ANCHOR Selectors ---------------------------- */:w

const leftValue = document.querySelector("left-input");
const rightValue = document.querySelector("right-input");
const mainDisplay = document.querySelector("btm-display");

/* ------------------------------ ANCHOR Events ----------------------------- */

leftValue.addEventListener("keyress", leftSubmit)
rightValue.addEventListener("keypress", rightSubmit)



=======
const leftInput = document.querySelector("left-input");
const rightInput = document.querySelector("right-input");
const btmDisplay = document.querySelector("btm-display");
const leftBtn = document.querySelector("left-button");
const rightBtn = document.querySelector("right-button");

/* ------------------------------ ANCHOR Events ----------------------------- */

leftBtn.addEventListener("click", submitLeft);
rightBtn.addEventListener("click", submitRight);

/* ------------------------- ANCHOR Display the bids ------------------------ */
function submitLeft() {
	const leftBidOutPut = document.createElement("p");
	leftBidOutPut.innerText = leftInput.value;
	leftBidOutPut.classList.add("output-h1");

	btmDisplay.appendChild(leftBidOutPut);

	leftInput.value = "";
}
>>>>>>> ed1ef09df1d25f8aae250d37633114eea934ac98
