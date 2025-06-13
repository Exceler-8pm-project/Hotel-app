function showMsg(formId, msgId) {
  document.getElementById(formId).reset();
  document.getElementById(msgId).classList.remove("hidden");
  setTimeout(() => {
    document.getElementById(msgId).classList.add("hidden");
  }, 3000);
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  showMsg("bookingForm", "bookingMsg");
});

document.getElementById("restaurantForm").addEventListener("submit", function(e) {
  e.preventDefault();
  showMsg("restaurantForm", "restaurantMsg");
});

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();
  showMsg("feedbackForm", "feedbackMsg");
});
