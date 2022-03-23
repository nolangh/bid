/* ---------------------------- ANCHOR Selectors ---------------------------- */

const leftValue = document.querySelector(".left-input");
const rightValue = document.querySelector(".right-input");
const mainDisplay = document.querySelector(".btm-display");
const leftSubmitBtn = document.querySelector(".left-button");
const rightSubmitButton = document.querySelector(".right-button");
const leftBtmDiv = document.querySelector(".left-bid-div");
const rightBtmDiv = document.querySelector(".right-bid-div");

/* ------------------------------ ANCHOR Events ----------------------------- */
leftSubmitBtn.addEventListener("click", addLeftBid);
rightSubmitButton.addEventListener("click", addRightBid);

function addLeftBid() {
	//Creates left value h1
	const leftBidDivH1 = document.createElement("h1");
	leftBidDivH1.innerText = leftValue.value;
	leftBidDivH1.classList.add("left-bid-h1");

	//Adds h1 to left display div
	leftBtmDiv.appendChild(leftBidDivH1);

	//Adds everything to Left display
	//mainDisplay.appendChild(leftBidDiv);

	leftValue.value = "";
}

function addRightBid() {
	const rightBidH1 = document.createElement("h1");
	rightBidH1.innerText = rightValue.value;
	rightBidH1.classList.add("right-bid-h1");
	rightBtmDiv.appendChild(rightBidH1);
	rightValue.value = "";
}
