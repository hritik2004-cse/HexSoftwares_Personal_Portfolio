const heading = document.querySelector(".heading");
const text = heading.textContent;
const alpha = text.split("");
heading.textContent = "";

// Wrap each letter and preserve spaces
for(let i = 0; i < alpha.length; i++) {
    if(alpha[i] === " ") {
        heading.innerHTML += "<span>&nbsp;</span>"; // For spaces
    } else {
        heading.innerHTML += "<span>" + alpha[i] + "</span>";
    }
}

let count = 0;

function onArrival() {
    const span = heading.querySelectorAll("span")[count];
    span.classList.add("fade");
    count++;
    
    // Stop the timer when all letters are animated
    if(count === alpha.length) {
        clearInterval(timer);
    }
}

let timer = setInterval(onArrival, 70);

// creating validInput function for checking the input is valid or not.

function validateInput(){
    let inputField = document.getElementById("inputField");
    let inputValue = inputField.value.trim();
    const errorMessage = document.querySelectorAll(".errorMessage");

    if(inputValue === ""){
        inputField.classList.add("shake");
        errorMessage.style.visibility = "visible" ;

        setTimeout(function(){
            inputField.classList.remove("shake");
            errorMessage.style.visibility = "hidden" ;
        }, 500);
    }
}

const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

toggleButton.addEventListener("click", () => {
  const root = document.documentElement;

  // Check the current mode and toggle between light and dark
  if (themeIcon.classList.contains("fa-sun")) {
    // Switch to dark mode
    root.style.setProperty("--primary-col", "#001f3f"); // Dark mode background color
    root.style.setProperty("--text-col", "#fff");    // Dark mode text color
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    // Switch to light mode
    root.style.setProperty("--primary-col", "#ffffff");
    root.style.setProperty("--text-col", "#001f3f");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
});
