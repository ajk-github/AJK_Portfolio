import config from '../../config.json' assert {type: 'json'};

const embedGame = (): string[] => {
  const games: string[] = [];
  const gameDetails = config.games.find(game => game.name === "Tetris");

  if (gameDetails) {
    const iframe = `<iframe style="overflow-y:hidden; margin:0; padding:0" src="${gameDetails.url}" width="${gameDetails.width}" height="${gameDetails.height}" frameborder="0">This browser does not support embedded games.</iframe>`;
    games.push(iframe);
  } else {
    games.push("Game details not found.");
  }




  
  return games;
}

export const TETRIS = embedGame();
