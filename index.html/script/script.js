// Start with 100 coins and 0 copy count
let coins = 100;
let copyCount = 0;

// Show the current coin and copy count in the navbar
function showCounts() {
  let coinButtons = document.querySelectorAll("button.btn.font-bold");
  coinButtons.forEach(function (btn) {
    if (btn.innerHTML.indexOf("coin.png") !== -1) {
      btn.childNodes[0].textContent = coins + " ";
    }
    if (btn.textContent.indexOf("copy") !== -1) {
      btn.textContent = copyCount + " copy";
    }
  });
}

// Add a call to the history list with the time
function addCallHistory(name, number) {
  let historyList = document.getElementById("call-history-list");
  let historyDiv = document.createElement("div");
  historyDiv.className = "m-2 p-2 border-b";
  let now = new Date();
  let timeString = now.toLocaleTimeString();
  historyDiv.innerHTML =
    "<strong>" +
    name +
    "</strong> - " +
    number +
    ' <span style="color:gray;">(' +
    timeString +
    ")</span>";
  historyList.appendChild(historyDiv);
}

// Set up the Call and Copy buttons for each card
function setupButtons() {
  let cards = document.querySelectorAll("section > div");
  cards.forEach(function (card) {
    // Call button
    let callBtn = card.querySelector(".btn-success");
    if (callBtn) {
      callBtn.addEventListener("click", function () {
       let name = "Service";
       let number = "";
       let nameElem = card.querySelector("h5");
       let numberElem = card.querySelector("p.font-extrabold");
        if (nameElem) name = nameElem.textContent;
        if (numberElem) number = numberElem.textContent;
        if (coins < 20) {
          alert("Not enough coins to make a call!");
          return;
        }
        coins = coins - 20;
        showCounts();
        alert("Calling " + name + " at " + number);
        addCallHistory(name, number);
      });
    }
    // Copy button
    let copyBtn = card.querySelector(".btn.bg-slate-100.rounded-xl");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        let numberElem = card.querySelector("p.font-extrabold");
        let number = "";
        if (numberElem) number = numberElem.textContent;
        navigator.clipboard.writeText(number).then(function () {
          copyCount = copyCount + 1;
          showCounts();
          alert("Hotline number " + number + " copied!");
        });
      });
    }
  });
}

// Set up the Clear History button
function setupClearHistory() {
  let clearBtn = document.getElementById("clear-history");
  let historyList = document.getElementById("call-history-list");
  if (clearBtn && historyList) {
    clearBtn.addEventListener("click", function () {
      historyList.innerHTML = "";
    });
  }
}

// When the page loads, set up everything
window.addEventListener("DOMContentLoaded", function () {
  showCounts();
  setupButtons();
  setupClearHistory();
});
