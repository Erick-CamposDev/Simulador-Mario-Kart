const characters = [
  { name: "Mario", speed: 4, maneuverability: 3, power: 3, points: 0 },
  { name: "Peach", speed: 3, maneuverability: 4, power: 2, points: 0 },
  { name: "Yoshi", speed: 2, maneuverability: 4, power: 3, points: 0 },
  { name: "Bowser", speed: 5, maneuverability: 2, power: 5, points: 0 },
  { name: "Luigi", speed: 3, maneuverability: 4, power: 4, points: 0 },
  { name: "Donkey Kong", speed: 2, maneuverability: 2, power: 5, points: 0 },
];

function chooseCharacters(name1, name2) {
  let player1;
  let player2;

  if (name1 === name2) {
    console.log("Não é permitido os mesmos personagens!");
    return;
  }

  characters.forEach((c) => {
    if (c.name === name1) {
      player1 = c;
    }

    if (c.name === name2) {
      player2 = c;
    }
  });

  return { player1, player2 };
}

function getRandomBlock() {
  const options = ["RETA", "CURVA", "CONFRONTO"];
  let random = Math.floor(Math.random() * 3);
  let result = options[random];

  return result;
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function logRollResult(characterName, blockName, diceResult, atributte) {
  console.log(
    `${characterName} rolou um dado de ${blockName}! O resultado deu ${diceResult}! O atributo aumentou para ${diceResult + atributte}`,
  );
}

function raceEngine(character1, character2) {
  for (let i = 1; i <= 5; i++) {
    console.log(`RODADA ${i} COMEÇOU!`);

    let diceBlock = getRandomBlock();
    console.log(`BLOCO: ${diceBlock}`);

    let diceResult1 = rollDice();
    let diceResult2 = rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (diceBlock === "RETA") {
      totalTestSkill1 = diceResult1 + character1.speed;
      totalTestSkill2 = diceResult2 + character2.speed;

      logRollResult(
        character1.name,
        "Velocidade",
        diceResult1,
        character1.speed,
      );
      logRollResult(
        character2.name,
        "Velocidade",
        diceResult2,
        character2.speed,
      );
    }

    if (diceBlock === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.maneuverability;
      totalTestSkill2 = diceResult2 + character2.maneuverability;

      logRollResult(
        character1.name,
        "Manobrabilidade",
        diceResult1,
        character1.maneuverability,
      );

      logRollResult(
        character2.name,
        "Manobrabilidade",
        diceResult2,
        character2.maneuverability,
      );
    }

    if (diceBlock === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.power;
      let powerResult2 = diceResult2 + character2.power;

      console.log("INICIOU-SE UM CONFRONTO!");

      logRollResult(character1.name, "Poder", diceResult1, character1.power);

      logRollResult(character2.name, "Poder", diceResult2, character2.power);

      if (powerResult1 > powerResult2 && character2.points > 0) {
        console.log(
          `${character1.name} venceu o confronto! ${character2.name} perdeu um ponto`,
        );
        character2.points--;
      } else if (powerResult2 > powerResult1 && character1.points > 0) {
        console.log(
          `${character2.name} venceu o confronto! ${character1.name} perdeu um ponto`,
        );
        character1.points--;
      }

      console.log(
        powerResult1 === powerResult2
          ? "CONFRONTO EMPATADO! NENHUM PONTO PERDIDO!"
          : "",
      );
    }

    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.name} ganhou um ponto!`);
      character1.points++;
    } else if (totalTestSkill1 < totalTestSkill2) {
      console.log(`${character2.name} ganhou um ponto!`);
      character2.points++;
    }

    console.log("-------------------------------------------");
  }

  declareWinner(character1, character2);
  restartPoints(character1, character2);
}

function declareWinner(character1, character2) {
  if (character1.points > character2.points) {
    console.log(
      `${character1.name} GANHOU A CORRIDA!!! COM O TOTAL DE ${character1.points} PONTOS!`,
    );
  } else if (character2.points > character1.points) {
    console.log(
      `${character2.name} GANHOU A CORRIDA!!! COM O TOTAL DE ${character2.points} PONTOS!`,
    );
  } else {
    console.log("A CORRIDA FICOU EMPATADA!");
  }
}

function restartPoints(character1, character2) {
  character1.points = 0;
  character2.points = 0;

  console.log("Os pontos de ambos os jogadores foram resetados!");
}

function start() {
  const players = chooseCharacters("Bowser", "Luigi");

  if (!players) {
    console.log("Jogadores não encontrados, tente novamente!");
  } else {
    const { player1, player2 } = players;
    raceEngine(player1, player2);
  }
}

start();
