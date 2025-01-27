// Hardcoded final time in UTC
const finalTimeUTC = "2025-02-02T18:45:00Z";

// Convert the final time to a Date object
const finalTime = new Date(finalTimeUTC);

// Countdown function
function updateCountdown() {
  const now = new Date();

  // Calculate the difference in milliseconds
  const difference = finalTime - now;

  // Check if the countdown has ended
  if (difference <= 0) {
    document.getElementById("timer").textContent = "Finally back !";
    document.getElementById("message").textContent = "Someone is missing...";
    clearInterval(countdownInterval);
    return;
  }

  // Convert difference to days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  // Display the countdown
  document.getElementById("timer").textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to avoid delay
updateCountdown();
