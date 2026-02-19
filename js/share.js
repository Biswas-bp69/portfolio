
fetch("header.html")
  .then(res => res.text())
  .then(data => document.getElementById("header").innerHTML = data);

fetch("footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);




// nav button js 
   function toggleMenu() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    window.onclick = function (event) {
      if (!event.target.closest('.menu-btn')) {
        var dropdown = document.getElementById("myDropdown");
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      }
    }