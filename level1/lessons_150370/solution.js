// let terms = {
//     'A': '6',
//     'B': '12',
//     'C': '3',
// }
// let privacies = ['2021.05.1 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
// let today = '2022.05.19';
// solution(today, terms, privacies);
// function yearCheck(today,privacies,termCheck) {
//     let td = today.replaceAll('.','-');
//     let pr = privacies.replaceAll('.','-');
//     let objObj = {
//         'today' : td,
//         'privacies' : pr,
//         'term': termCheck
//     }
//     return objObj
// }
//
// function isExpired(check,length) {
//     let today = new Date(check.today)
//     let privacies = new Date(check.privacies)
//     let termsData = check.term;
//     let date = privacies
//     date.setMonth(privacies.getMonth() + Number(termsData));
//     let now = today;
//     if (now < date) {
//         console.log('기간남음');
//     } else {
//         length++;
//         console.log('초과임');
//     }
//     return length;
// }
//
// function solution(today, terms, privacies) {
//     let length = 0;
//     let lengthFinal = 0;
//     privacies.map(function (val,idx) {
//         let termCk = val.split(' ');
//         let prDay = termCk[0];
//         let term = termCk[1];
//         let obj = yearCheck(today,prDay,terms[term]);
//         lengthFinal += isExpired(obj,length);
//     });
//     return lengthFinal
// }


function solution(today, terms, privacies) {
    const termsObj = {};
    const destroy = [];
    terms.forEach(term => termsObj[term.split(" ")[0]] = term.split(" ")[1]);
    privacies.forEach((priv, i) => {
        const [date, term] = priv.split(" ");
        const finalDate = new Date(date);
        finalDate.setMonth(finalDate.getMonth() + +termsObj[term]);
        if (finalDate <= new Date(today)) destroy.push(i + 1);
    });
    return destroy;
}