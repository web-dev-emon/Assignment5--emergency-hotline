// Emergency Hotline JS Logic

// Initial coin count
let coins = 100;

// Update coin display
function updateCoinDisplay() {
  const coinBtns = document.querySelectorAll("button.btn.font-bold");
  coinBtns.forEach((btn) => {
    if (btn.innerHTML.includes("coin.png")) {
      btn.childNodes[0].textContent = coins + " ";
    }
  });
}

// Add to Call History
function addToCallHistory(serviceName, serviceNumber) {
  const aside = document.querySelector("aside");
  const historyDiv = document.createElement("div");
  historyDiv.className = "m-4 p-2 border-b";
  historyDiv.innerHTML = `<strong>${serviceName}</strong> - ${serviceNumber}`;
  aside.appendChild(historyDiv);
}

// Handle Call Button Clicks
function setupCallButtons() {
  const cards = document.querySelectorAll("section > div");
  cards.forEach((card) => {
    const callBtn = card.querySelector(".btn-success");
    if (callBtn) {
      callBtn.addEventListener("click", function () {
        // Get service name and number
        const serviceName = card.querySelector("h5")?.textContent || "Service";
        const serviceNumber =
          card.querySelector("p.font-extrabold")?.textContent || "";
        if (coins < 20) {
          alert("Not enough coins to make a call!");
          return;
        }
        coins -= 20;
        updateCoinDisplay();
        alert(`Calling ${serviceName} at ${serviceNumber}`);
        addToCallHistory(serviceName, serviceNumber);
      });
    }
  });
}

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  updateCoinDisplay();
  setupCallButtons();
});
