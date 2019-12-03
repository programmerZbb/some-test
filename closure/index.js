function fn (n, o) {
    console.log(o)
    return {
        fn: function (m) {
            return fn(m, n)
        }
    }
}

// fn(1).fn(2).fn(3).fn(4)

// var fun = fn(1)
// fun.fn(2)
// fun.fn(3)
// fun.fn(4)

var fun = fn(0).fn(1)
fun.fn(2)
fun.fn(3)