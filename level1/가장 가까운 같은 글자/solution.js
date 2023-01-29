function solution(s) {
    let stack = [];
    let answer = [];
    let arr = [...s];

    arr.forEach((str) => {
        console.log('str', str)
        if (!stack.includes(str)) {
            answer.push(-1);
        }

        if (stack.includes(str)) {
            //배열의 갯수 - 배열 내 단어의 위치
            answer.push(stack.length - stack.lastIndexOf(str));
        }
        stack.push(str);
    })
    return answer;
}