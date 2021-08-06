const templateBurger = ["bottom-bun", "beef-patty", "top-bun"];
let currentBurger = [];

function removeItem(id) {
  currentBurger = currentBurger.filter(function (value, index, array) {
    return value != id;
  });
}

let i = 1;

const onPressIngredients = (id) => {
  const element = document.getElementById(id);
  const container = element.parentNode.id;
  if (container !== "grid-ingredients") {
    const newContainer = document.getElementById("grid-ingredients");
    newContainer.appendChild(element);
    element.style.top = "0px";
    i--;
    removeItem(id);
  } else {
    const newContainer = document.getElementById("grid-plate");
    newContainer.appendChild(element);
    element.style.top = 40 * i + "px";
    i++;
    currentBurger.push(id);
  }
};

const onPressCheck = () => {
  if (JSON.stringify(currentBurger) === JSON.stringify(templateBurger)) {
    alert("Congratulations!");
  } else {
    alert("You're not done yet!");
  }
};
