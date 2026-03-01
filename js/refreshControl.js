
document.getElementById("myLink").onclick = function(e) {
  e.preventDefault();
  e.stopPropagation();   // extra safety
  alert("Refresh रोकियो");
  return false;          // double safety
};
