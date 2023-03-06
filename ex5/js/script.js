const checkForSpam = function (message) {
  const messageReform = message.toLowerCase().split(" ");
  return messageReform.includes("sale") || messageReform.includes("spam");
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("SPAM How to earn fast money?"));
