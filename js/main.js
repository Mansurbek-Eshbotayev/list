let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let elList = document.querySelector(".form__list");
let yourPlan = [];



elForm.addEventListener("submit", function (evt){
  evt.preventDefault();

  let elInputVal = elInput.value.trim( );
  
  elForm.value = null;
  
  let plan = {
    id: yourPlan.length,
    title: elInputVal,
  };
  
  yourPlan.push(plan);
  elList.innerHTML = " ";


  for (let item of yourPlan){
    let newItem = document.createElement("li");
    newItem.textContent = item.id + 1 + "." + item.title;
    elList.appendChild(newItem);
  };
});