function dobrarEmUmNumero (num) {
    return new Promise ((resolved, reject) => {
        setTimeout((resolved(num * 2)), 1000)
    })
}

dobrarEmUmNumero(10).then(resultado => console.log(resultado))