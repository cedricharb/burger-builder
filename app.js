const container = document.getElementById("grid-plate");

const onPress = (id) => {
  const element = document.getElementById(id);
  container.appendChild(element);
};
