// K = 최상품 3
// 1점 = 최하품 1
// 한상자 M개씩 포장 4개
// 가장낮은점수 = P점 (1<=P <=K)
// 사과 한상자의 가격 = P*M
// 과일장수가 가능한 많은 사과를 팔았을 때 얻을 수 있는 최대 이익을 계산하라
//
// 최상품이 3점
// 한상자 포장갯수 4개
// 사과 7개의 점수가 [1,2,3,1,2,3,1]
// 1. 내림차순으로 정렬 , M개로 자르기
// 2. 자른 배열의 마지막 값 * 한상자개수 M * 상자의개수


// K : 3
// M : 4
let score = [1, 2, 3, 1, 2, 3, 1]
solution(3, 4, score);

// K : 4
// M : 3
// let score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
// solution(4, 3, score);
function solution(k, m, score) {
    // 배열을 내림차순으로 정렬한다.
    let sort_arr = score.sort((a,b) => b-a);
    let arr_cut = []; // 배열을 한상자 갯수만큼 나누기
    let low_apple = []; // 나눈배열을 돌면서 가장 낮은 값 다른 배열에 담기 (가장 낮은점수의 사과들)
    let maximum = 0;

    for (let i = 0; i < sort_arr.length; i += m) {
        arr_cut.push(sort_arr.slice(i, i + m));
    }
    arr_cut.forEach(function (val, index) {
        if (val.length == m) { // 한상자가 다 만들어져야함
            let low = val[val.length - 1]
            let price = low * m
            low_apple.push(price);
        }
    });

    for (let i = 0; i < low_apple.length; i++) {
        maximum += low_apple[i]
    }
    let answer = maximum;
    console.log('answer', answer);
    return answer
}