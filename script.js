const players = [
    `;
  });
}


function fillTournamentTable() {
  const sortedPlayers = [...players].sort((a, b) => tournamentPoints(b) - tournamentPoints(a));

  const table = document.getElementById("tournamentTable");

  sortedPlayers.forEach((player, index) => {
    table.innerHTML += `
      <tr class="${index === 0 ? 'rank-one' : ''}">
        <td>${index + 1}</td>
        <td>${player.name}</td>
        <td>${player.first}</td>
        <td>${player.second}</td>
        <td>${player.third}</td>
        <td>${tournamentPoints(player)}</td>
      </tr>
    `;
  });
}


function fillDashboard() {
  const topEloPlayer = [...players].sort((a, b) => b.elo - a.elo)[0];

  const topRecordPlayer = [...players].sort((a, b) => winPercentage(b) - winPercentage(a))[0];

  const topTournamentPlayer = [...players].sort((a, b) => tournamentPoints(b) - tournamentPoints(a))[0];

  document.getElementById("topElo").textContent = `${topEloPlayer.name} - ${topEloPlayer.elo} ELO`;

  document.getElementById("topRecord").textContent = `${topRecordPlayer.name} - ${winPercentage(topRecordPlayer)}% Win Rate`;

  document.getElementById("topTournament").textContent = `${topTournamentPlayer.name} - ${tournamentPoints(topTournamentPlayer)} Points`;
}


function createChessBoard() {
  const board = document.getElementById("board");

  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");

    const row = Math.floor(i / 8);
    const column = i % 8;

    if ((row + column) % 2 === 0) {
      square.className = "square light";
    }
    else {
      square.className = "square dark";
    }

    board.appendChild(square);
  }
}


fillEloTable();
fillRecordTable();
fillTournamentTable();
fillDashboard();
createChessBoard();
