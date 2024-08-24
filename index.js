function updateDiceImage(selector) {
  // Generate a random number between 1 and 6
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  // Select the image using the provided selector and update its src attribute
  document
    .querySelector(selector)
    .setAttribute("src", "images/dice" + randomNumber + ".png");
}

// Update dice images for Player 1 and Player 2
updateDiceImage(".img1"); // Pass the class selector for Player 1's image
updateDiceImage(".img2"); // Pass the class selector for Player 2's image
