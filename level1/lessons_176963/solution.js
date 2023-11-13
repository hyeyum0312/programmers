const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
];

function solution(name, yearning, photo) {
    let score = [];
    let photoscore = [];
    for (let idx in name) {
        score.push({ key: name[idx], value: yearning[idx] });
    }

    for (let item in photo) {
        let ckckck = [];

        for (let idx in photo[item]) {
            score.filter((item3) => {
                if (item3.key === photo[item][idx]) {
                    ckckck.push(item3.value);
                }
            });
        }

        let result = ckckck.reduce((prev, cur) => {
            return (prev += cur);
        }, 0);

        photoscore.push(result);
    }

    return photoscore;
}
