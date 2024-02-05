function hideMenu() {
  // Add code to hide the menu, for example:
  document.getElementById('openSidebarMenu').checked = false;
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  return false; // Prevents the default behavior of the anchor tag
}

// Form

let URL =
  'https://script.google.com/macros/s/AKfycbwIe-Bg8wVqLGlbe8AOIw_v04cA5q-YeZL8s2zOLrwyD0-rOPI4AzusipWZoSmiMGym/exec';
let form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  document.getElementById('btn').innerHTML = 'Submitting...';
  let d = new FormData(form);
  fetch(URL, {
    method: 'POST',
    body: d,
  })
    .then((res) => res.text())
    .then((finalRes) => {
      document.getElementById('btn').innerHTML = 'Submit';
      document.getElementById('res').innerHTML = finalRes;
      form.reset();
      setTimeout(() => {
        document.getElementById('res').innerHTML = '';
      }, 5000);
    });
  e.preventDefault();
});
