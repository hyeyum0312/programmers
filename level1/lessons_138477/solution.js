function solution(k, score) {
    const arr = []
    const result = []

    for(let i = 0 ; i < score.length ; i ++) {
        if(i < k) {
            arr.push(score[i])
        }

        if(score[i]>Math.min(...arr)) {
            arr.pop()
            arr.push(score[i])
            arr.sort((a,b) => b-a)
        }

        result.push(arr.at(-1))
    }
    console.log('result',result)
    return result
}