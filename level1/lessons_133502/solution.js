let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
// let ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2]
solution(ingredient);
function solution(ingredient) {
    let answer = 0;
    let packaging = [];
    for (let i=0; i <= ingredient.length; i++) {
        packaging.push(ingredient[i]);
        if (packaging.length >= 4 && ingredient[i] == 1) {
            let bugger = packaging.slice(packaging.length-4, packaging.length).join('');
            console.log('bugger',bugger)
            if (bugger === '1231') {
                packaging.splice(packaging.length-4, packaging.length);
                answer++;
            }
        }
    }
    console.log('answer',answer)
    return answer;
}
