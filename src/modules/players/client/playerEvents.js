// Gestion des events liés aux joueurs coté client
onNet("playerJoined", (playerId) => {
	console.log(`${playerId} has joined the game.`);
	showNotification(`${playerId} joined!`);
});
