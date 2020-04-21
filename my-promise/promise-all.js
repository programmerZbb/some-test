MyPromise.all = (arr) => {
    let value = []
    return MyPromise((res, rej) => {
        arr.forEach(item => {
            MyPromise.resolve(item)
             .then(val => {
                 value.push(val)
                 if (value.length == arr.length) {
                     res(value)
                 }
             }, rej)
        });
    })
}