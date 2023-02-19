// [1, 3, 4, 6]	"1223330333221"
let food = [1, 3, 4, 6];
solution(food);
function solution(food) {
    let answer = [0];
    for(let i=food.length; i>0; i--) {
        let foodLength = Math.floor(food[i] / 2);
        for(let j=0; j<foodLength; j++) {
            answer.push(i);
            answer.unshift(i);
        }
    };
    return answer.join('');
}
