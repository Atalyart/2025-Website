window.onload = function () {
  document.getElementById("emailPopup").style.display = "flex";
};

function closePopup() {
  document.getElementById("emailPopup").style.display = "none";
}

window.onload = function () {
  document.getElementById("emailPopup").style.display = "flex";
};

function closePopup() {
  document.getElementById("emailPopup").style.display = "none";
}

// Close popup when clicking outside the popup-content
document.addEventListener("click", function (event) {
  const popup = document.getElementById("emailPopup");
  const content = document.querySelector(".popup-content");

  if (popup.style.display === "flex" && !content.contains(event.target)) {
    closePopup();
  }
});
!content.contains(event.target)
