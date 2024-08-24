function updateDiceImage(selector) {
  // Generate a random number between 1 and 6
  var randomNumber = Math.floor(Math.random() * 6) + 1;

  // Select the image using the provided selector and update its src attribute
  document
    .querySelector(selector)
    .setAttribute("src", "images/dice" + randomNumber + ".png");

  return randomNumber;
}

function determineWinner(player1Number, player2Number) {
  const resultElement = document.querySelector("h1");

  if (player1Number > player2Number) {
    resultElement.textContent = "Player 1 Wins!";
  } else if (player2Number > player1Number) {
    resultElement.textContent = "Player 2 Wins!";
  } else {
    resultElement.textContent = "It's a Draw!";
  }
}

// Update dice images for Player 1 and Player 2
const player1Number = updateDiceImage(".img1"); // Store the result for Player 1
const player2Number = updateDiceImage(".img2"); // Store the result for Player 2

determineWinner(player1Number, player2Number);
