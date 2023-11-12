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