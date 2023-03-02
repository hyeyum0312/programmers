function solution(babbling) {
    let answer =0;
    babbling.forEach(word => {
        if (regex.test(word)) {
            answer++;
        }
    });
    return answer;
}