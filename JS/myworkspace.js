
// This JS file adds accessible features to the global Edit Profile Dropdown modal

const sarahName = document.getElementById("profilename");
const editProfileButton = document.getElementById("edit-profile-button");
const editProfileModal = new bootstrap.Modal(
  document.getElementById("exampleModal")
);

sarahName.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    editProfileButton.setAttribute("tabindex", "0");
    editProfileButton.click();
  }
});

editProfileButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    editProfileModal.show();
  }
});