// Challange: Ranked System

// Saving calculation returned by the function
let ranking = calculatePlayerRank(39, 10);

// Display the player's rank level
getPlayerRankLevel();

// Function to calculate player rank based on wins and losses
function calculatePlayerRank(wins, losses) {
  let ranked = wins - losses;
  return ranked;
}

// Function to determine player rank level based on ranking score
function getPlayerRankLevel() {
    // I used Array to store the levels. PS: Only for practice.
  let level = [
    "Ferro",
    "Bronze",
    "Prata",
    "Ouro",
    "Diamante",
    "Lendário",
    "Imortal",
  ];

  if (ranking < 10) {
    console.log(
      `O Herói tem de saldo de ** ${ranking} ** e está no nível de ${level[0]}`
    );
  } else if (ranking >= 10 && ranking <= 20) {
    console.log(
      `O Herói tem de saldo de ** ${ranking} ** e está no nível de ${level[1]}`
    );
  } else if (ranking > 20 && ranking <= 50) {
    console.log(
      `O Herói tem de saldo de ** ${ranking} ** e está no nível de ${level[2]}`
    );
  } else if (ranking > 50 && ranking <= 80) {
    console.log(
      `O Herói tem de saldo de ** ${ranking} ** e está no nível de ${level[3]}`
    );
  } else if (ranking > 80 && ranking <= 90) {
    console.log(
      `O Herói tem de saldo de ** ${ranking} ** e está no nível de ${level[4]}`
    );
  } else if (ranking > 90 && ranking <= 100) {
    console.log(
      `O Herói tem de saldo de ** ${ranking} ** e está no nível de ${level[5]}`
    );
  } else if (ranking > 100) {
    console.log(
      `O Herói tem de saldo de ** ${ranking} ** e está no nível de ${level[6]}`
    );
  } else {
    console.log("Saldo inválido");
  }
}
