const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

const checkInput = (input) => {
  if (input === ""){
    alert("Please provide a phone number");
    return;
  }

  const validInput = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/
;
  validInput.test(input)? result.textContent = `Valid US number: ${input}` : result.textContent = `Invalid US number: ${input}`;

  result.classList.remove("hidden");
}

checkBtn.addEventListener("click", ()=>{
  checkInput(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", e=> {
  if (e.key==='Enter'){
    checkInput(userInput.value);
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", ()=>{
  result.textContent = "";
  result.classList.add("hidden");
});
