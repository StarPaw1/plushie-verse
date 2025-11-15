let bloggin = false;
document.getElementById("depressed").addEventListener("click", function() {
  document.getElementById("depressed").style.color = "rgb(40, 244, 99)";
   const element = document.getElementById("depressed");
  
  element.style.color = "rgb(40, 244, 99)";
  bloggin = true;
  if (bloggin) {
  element.style.backgroundColor = "rgb(40, 24, 235)";
}
});
