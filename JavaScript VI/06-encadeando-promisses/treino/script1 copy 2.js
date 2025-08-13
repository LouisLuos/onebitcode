function num (num) {
    return new Promise((resolved, reject) => {
        resolved(num)
    })
}

num(10).then((num) => console.log(num + 10))