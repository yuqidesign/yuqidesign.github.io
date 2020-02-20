var btn = document.getElementById("phone");
btn.addEventListener("click", function() {
  var ph = document.getElementById("phone").innerHTML;
  ph.focus();
  ph.setSelectionRange(0, ph.value.length);
  document.execCommand("copy", true);
});
