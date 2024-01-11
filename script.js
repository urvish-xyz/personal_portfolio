function hideMenu() {
  // Add code to hide the menu, for example:
  document.getElementById("openSidebarMenu").checked = false;
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  return false; // Prevents the default behavior of the anchor tag
}