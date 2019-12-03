function fib (n) {
    if (n <= 2) {
        return 1
    }
    return fib(n-1) + fib(n-2)
}

this.onmessage = function (event) {
    console.log('子线程接收到了数据', event.data)
    let data = fib(event.data)
    postMessage(data)
}