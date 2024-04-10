const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "rgb(107, 162, 204)";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your application...";
 
}