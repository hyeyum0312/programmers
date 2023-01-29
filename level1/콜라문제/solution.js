function solution(a, b, n) {
    let data = (n/a)*b;
    let num = data;
    var answer;
    for (let idx=0; idx <= data; idx++) {
        data = (data/a)*b ;
        num += data;
        data = Math.floor(data);
        if (data % 2 == 0) {
            answer = Math.floor(num);
        } else {
            answer = Math.round(num);
        }
    }
    return answer;
}