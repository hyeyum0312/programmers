const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

function solution(players, callings) {
    const score = players.reduce((acc, value, index) => {
        acc[value] = index;
        return acc;
    }, {});

    console.log("score", score);
    callings.forEach((value) => {
        const index = score[value];
        const temp = players[index - 1];

        console.log("index", index);
        console.log("temp", temp);
        console.log("value", value);

        console.log("players[index - 1]", players[index - 1]);
        console.log("players[index]", players[index]);

        [players[index - 1], players[index]] = [value, temp];
        score[temp] += 1;
        score[value] -= 1;
    });

    return players;
}

solution(players, callings);
