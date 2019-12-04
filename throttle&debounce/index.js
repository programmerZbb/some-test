function throttle (callback, delay) {
    var start = 0
    return function () {
        console.log('点击次数')
        let current = new Date()
        if (current- start >= delay) {
            start = current
            callback.apply(this, arguments)
        }
    }
}

function debounce (callback, delay) {
    let timer = ''
    return function () {
        console.log('点击次数', timer)
        let args = arguments
        if (timer != '') {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            callback.apply(this, args)
            timer = ''
        }, delay);
    }
}
