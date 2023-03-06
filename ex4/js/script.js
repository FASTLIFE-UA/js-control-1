const formatString = function (string) {
  const arrayStrings = string.split("");

  const stringLength = 40;

  for (const arrayString of arrayStrings) {
    if (arrayStrings.length > stringLength) {
      const dell = arrayStrings.slice(0, 40);
      const modernString = dell.join("");
      return `${modernString} ...`;
    }
    return string;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
