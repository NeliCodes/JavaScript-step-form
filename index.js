const pathname = window.location.pathname;

if (pathname.includes("index.html")) {

  const divElement = document.querySelector("#btns", "btns12");

  divElement.style.backgroundColor = "hsl(217, 100%, 97%)";
  divElement.style.color = "#000";
}

//
function validateForm() {
  const name = document.getElementById("fname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
 
  
  if (name.value === "") {
    name.value = "Name must be filled!";
    name.style.color = "red";  
    return false;
  } else if (email.value === "") {
   email.value = "Email must be filled!";
   email.style.color = "red";
    return false;
  } else if (phone.value === "") {
    phone.value = "Phone number must be filled!";
    phone.style.color = "red";
    return false;
  } else {
    window.location.href = "page2.html";
    return true;
  }
}