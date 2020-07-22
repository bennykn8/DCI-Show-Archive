function showDropdown(i) {
  document.getElementsByClassName("dropdown-content")[i].classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show'))
        dropdowns[i].classList.remove('show');
    }
  }
}