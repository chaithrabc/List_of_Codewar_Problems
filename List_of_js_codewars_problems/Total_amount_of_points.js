function points(games) {
  let totalPoints = 0;
  for (let i = 0; i < games.length; i++) {
    const [ourScore, opponentScore] = games[i].split(":").map(Number);
    if (ourScore > opponentScore) {
      totalPoints += 3; // Win
    } else if (ourScore === opponentScore) {
      totalPoints += 1; // Tie
    }
  }
  return totalPoints;
}
