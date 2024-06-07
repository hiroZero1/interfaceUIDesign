document.getElementById('menuIcon').addEventListener('click', function() {
  document.getElementById('overlayMenu').style.width = '100%';
});

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('overlayMenu').style.width = '0%';
});

document.querySelectorAll('.overlay-content a').forEach(function(anchor) {
  anchor.addEventListener('click', function() {
      document.getElementById('overlayMenu').style.width = '0%';
  });
});