const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = i + 1 + " - " + array[i];
  }
  console.log(array);
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
