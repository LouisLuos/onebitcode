const a = new Promise((resolved, reject) => {
    resolved("Olá mundo")
})


a.then((result) => result)

console.log(a)