function getPrimeNumber(index) {
    if (index < 4) return index;
    let pArr = [2, 3];
    for (let i = 4; i < 1000000000; i++) {
        let isPrime = true;
        for (let j = 0; j < pArr.length; j++)
            if (i % pArr[j] === 0) {
                isPrime = false;
                break;
            }
        if (!isPrime) { continue; }
        if (pArr.length > index - 3) { return i; }
        pArr.push(i);
    }
    return 0;
}

self.addEventListener('message', function(e) {
    let data = e.data;
    let result = getPrimeNumber(data.index);
    self.postMessage(result);        
}, false);