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
	const leftBidDivH1 = document.createElement("h1");
	leftBidDivH1.innertext = leftValue.value;
	leftBidDivH1.classList.add("left-bid-h1");
	leftBtmDiv.appendChild(leftBidDivH1);
	saveLeft(leftValue.value);
	leftValue.value = "";
}

function addRightBid() {
	const rightBidH1 = document.createElement("h1");
	rightBidH1.innerText = rightValue.value;
	rightBidH1.classList.add("right-bid-h1");
	rightBtmDiv.appendChild(rightBidH1);
	saveRight(rightValue.value);
	rightValue.value = "";
}

function saveLeft(leftBidValue) {
	let bids;
	if (localStorage.getItem("leftBidValue") === null) {
		bids = [];
	} else {
		bids = JSON.parse(localStorage.getItem("leftBidValue"));
	}

	bids.push(leftBidValue);
	localStorage.setItem("leftBidValue", JSON.stringify(bids));
}

function saveRight(rightValue) {
	let rBid;
	if (localStorage.getItem("rightBid") === null) {
		rBid = [];
	} else {
		rBid = JSON.parse(localStorage.getItem("rightBid"));
	}

	rBid.push(rightValue);
	localStorage.setItem("rightbid", JSON.stringify(rBid));
}
