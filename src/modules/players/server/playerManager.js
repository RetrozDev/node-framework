// gestion des joueurs coté serveur


// Fonction pour collecter les identifiants
const collectIdentifiers = (playerId) => {
    const identifiers = []

    for (let i = 0; i < GetNumPlayerIdentifiers(playerId); i++) {
        const identifier = GetPlayerIdentifier(playerId, i);
        identifiers.push(identifier);
    }

    return identifiers;
};

// Gestion de la connexion
on("playerConnecting", (playerName) => {
    const playerId = source;
    emitNet("playerJoined", playerId);
    console.log(`${playerName} has joined the game.`);
});

// Gestion des identifiants du joueur
on('playerJoining', () => {
    const playerLicenses = collectIdentifiers(source);
    console.log(playerLicenses);
});

// Gestion de la déconnexion
on("playerDropped", (reason) => {
    const playerId = source;
    console.log(`Player ${playerId} dropped (Reason: ${reason})`);
    delete playerLicenses[playerId]; // Nettoyage des données
});
